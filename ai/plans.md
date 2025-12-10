!!! git не трогать !!!
M3: Подключение реальной LLM (qwen480) и расширенная генерация тестов
0) Общие требования и контекст

Работать в каталоге ai/ проекта.

Текущая архитектура: libs/agents/orchestrator.py, libs/agents/planner/, libs/systems/llm/local_llm_stub.py, libs/integrations/interfaces/llm.py (Protocol), API apps/api/.../generate.py.

У нас есть .env с переменной LLM_API_KEY=qwen480 (не коммитим .env).

Цель M3: заменить/дополнить локальный stub реальным LLM-клиентом (pluggable), чтобы он генерировал полноценный pytest-код (не просто test_dummy), добавив базовую валидацию синтаксиса и тесты.

1) Что именно сделать (по файлам — точные задачи)
1.1 Протокол LLM (если ещё не в проекте)

Проверить ai/libs/integrations/interfaces/llm.py. В нём должен быть Protocol, например:

from typing import Protocol

class LLMService(Protocol):
    def generate(self, prompt: str) -> str: ...
    async def agenerate(self, prompt: str) -> str: ...


Если отсутствует — создать/дополнить.

Коммит: chore(m3): ensure LLMService protocol with sync/async API

1.2 Реализация Qwen LLM-клиента (реальный вызов)

Создать файл ai/libs/systems/llm/qwen_client.py.

Основные требования к клиенту:

Использует httpx (async capable).

Берёт settings.LLM_API_KEY и settings.LLM_BASE_URL (по умолчанию placeholder — явно указать, чтобы dev заменил URL на реально используемый у провайдера).

Реализует generate(prompt: str) -> str и agenerate(prompt: str) -> str.

Обрабатывает таймауты и ошибки (retries с экспоненциальным backoff, например tenacity или ручной retry).

Если API недоступна или ключ отсутствует — бросает понятное исключение LLMError или фейлкэслу к LocalLLMStub (graceful failover).

Пример (скелет):

# ai/libs/systems/llm/qwen_client.py
import httpx
import asyncio
from typing import Optional
from libs.shared.config import settings
from libs.integrations.interfaces.llm import LLMService

class QwenLLMClient(LLMService):
    def __init__(self, api_key: Optional[str] = None, base_url: Optional[str] = None, timeout: int = 30):
        self.api_key = api_key or settings.LLM_API_KEY
        self.base_url = base_url or settings.LLM_BASE_URL or "https://api.qwen.example/v1/generate"  # replace with actual
        self.timeout = timeout

    def generate(self, prompt: str) -> str:
        # sync wrapper calling async under the hood
        return asyncio.get_event_loop().run_until_complete(self.agenerate(prompt))

    async def agenerate(self, prompt: str) -> str:
        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        payload = {"prompt": prompt, "max_tokens": 1500}
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            resp = await client.post(self.base_url, json=payload, headers=headers)
            resp.raise_for_status()
            data = resp.json()
            # TODO: adapt parsing to provider response structure
            return data.get("text") or data.get("result") or ""


Важно: в коде отметить комментариями # TODO — место где нужно свериться с документацией провайдера и при необходимости поправить парсинг ответа и endpoint.

Коммит: feat(m3): add QwenLLMClient (httpx async)

1.3 Конфигурация (libs/shared/config.py)

Добавить/проверить в Settings поля:

LLM_API_KEY: Optional[str] = None
LLM_BASE_URL: Optional[str] = None
USE_REAL_LLM: bool = False  # optional, чтобы dev мог включать/выключать


Config должен читать .env. Если LLM_API_KEY присутствует — USE_REAL_LLM можно выставлять true (или оставлять ручной флаг).

Коммит: chore(config): add LLM settings

1.4 DI / выбор реализации LLM в API adapter

Адаптер в apps/api/src/ai_api/services/orchestrator_adapter.py (или где создаются зависимости) должен выбирать реализацию:

Если settings.LLM_API_KEY и settings.USE_REAL_LLM → QwenLLMClient()

Иначе → LocalLLMStub()

Пример:

from libs.systems.llm.qwen_client import QwenLLMClient
from libs.systems.llm.local_llm_stub import LocalLLMStub
def create_llm_service():
    if settings.LLM_API_KEY and settings.USE_REAL_LLM:
        return QwenLLMClient()
    return LocalLLMStub()


Коммит: feat(m3): DI for QwenLLMClient vs LocalLLMStub

1.5 Improved Prompt Builder

Обновить libs/agents/generator/prompt_builder.py (или где у тебя строятся промты) чтобы:

Принимать plan (output planner), spec и context overrides.

Использовать Jinja2-шаблон packages/prompt_templates/generate_test_prompt.j2.

Формат промпта должен содержать:

краткий summary (feature / owner / priority if provided)

список endpoint'ов с HTTP method + path + sample input/output schemas (если есть)

требование AAA + Allure labels + пример конфигурации pytest conftest (если нужно)

Добавь возможность задать max_tests_per_endpoint из настроек.

Коммит: feat(m3): improve prompt_builder to render Jinja2 templates using plan

1.6 Валидация сгенерированного кода (Validator)

В libs/agents/validator/semantic_checks.py добавить функцию validate_generated_code(path: str) -> Tuple[bool, str]:

Минимальные проверки:

py_compile.compile(path, doraise=True) — проверка синтаксиса.

проверка на наличие def test_ в файле (regex).

опционально ruff/black форматирование — но для M3 достаточно синтаксиса.

Возвращать (True, "") или (False, "error msg").

В Orchestrator, после записи artifact, вызвать валидацию и если не проходит — пометить run как failed с сообщением.

Коммит: feat(m3): add syntax validator for generated artifacts

1.7 Обновление Orchestrator

В libs/agents/orchestrator/orchestrator.py:

Интегрировать prompt_builder → LLM → validator.

Если QwenLLMClient возвращает текст, записать его в artifact.

После записи — py_compile на файл. Если ошибка — _RUN_STORE[run_id] = {"status":"failed", "error": ...}.

При успехе — status: finished.

Коммит: feat(m3): orchestrator uses planner->prompt->qwen->validate->save flow

1.8 Тесты
Unit tests

ai/tests/unit/libs/systems/test_qwen_client.py

Мокать httpx AsyncClient.post (use respx or pytest-mock) — проверять, что agenerate() парсит ответ.

Тест на поведение при неисправном ключе/ошибке (raise httpx.HTTPStatusError).

ai/tests/unit/libs/agents/test_validator.py

Создать временный файл с синтаксически корректным и некорректным содержимым и проверить validate_generated_code.

ai/tests/unit/libs/agents/test_prompt_builder.py

Проверить, что по sample plan получаем непустой prompt и рендер шаблона.

Integration tests (опционально / gated)

ai/tests/integration/test_generate_with_real_llm.py

Пометить тест как skip если settings.LLM_API_KEY отсутствует.

Если ключ есть — сделать end-to-end: создавать orchestrator с QwenLLMClient, запускать start_run, ждать finish, проверять, что artifact валиден (py_compile) и содержит def test_.

Коммит: test(m3): add unit tests for qwen client, prompt builder and validator; integration test gated by LLM_API_KEY

1.9 CI и безопасность

Обновить .gitignore чтобы гарантированно исключить .env.

В README добавить инструкцию: как положить LLM_API_KEY в .env и как включить USE_REAL_LLM=true.

CI: integration test с реальным LLM не включать в CI по умолчанию — можно предусмотреть отдельный pipeline для gated-integration с секретами в CI.

Коммит: docs: .env usage and LLM integration notes

2) Команды для разработки и запуска (copy/paste)
Установка зависимостей (в .venv)
cd ai
pip install -r requirements.txt
pip install httpx jinja2  # если не в requirements
pip install -e libs/shared

Запуск API локально (в отдельном терминале)
cd ai
$env:PYTHONPATH=".;apps/api/src"
uvicorn ai_api.main:app --app-dir apps/api/src --reload --port 8000

Run unit tests
cd ai
pytest tests/unit -q

Run integration test (с ключом)
cd ai
# убедись что .env содержит LLM_API_KEY и USE_REAL_LLM=true
python -m pytest tests/integration/test_generate_with_real_llm.py -q

3) Коммиты — порядок и сообщения

chore(config): add LLM settings (LLM_API_KEY, LLM_BASE_URL, USE_REAL_LLM)

feat(m3): add QwenLLMClient (async httpx client)

feat(m3): add prompt_builder improvements and Jinja2 template

feat(m3): add validator for generated artifacts

feat(m3): orchestrator uses planner->prompt->llm->validate->save flow

test(m3): add unit tests for qwen client, prompt builder, validator

test(m3): add gated integration test for real LLM

docs: add .env and LLM usage notes

Делай атомарные коммиты.

4) Acceptance criteria (M3 готовность)

 QwenLLMClient корректно вызывает внешний API при наличии ключа (unit test с моками проходит).

 Если LLM_API_KEY не задан — система использует LocalLLMStub автоматически.

 Orchestrator сохраняет generated_<run_id>.py, запускает синтаксическую проверку и ставит status=finished или failed с error.

 Unit-тесты (включая validator/prompt builder/qwen client mocks) — все зелёные.

 Integration test с реальным LLM помечен skip если ключа нет; при наличии ключа проходит.

 README и .env инструкции добавлены; .env — в .gitignore.

5) Замечания/варианты (на выбор, кратко)

Вариант A: начать с простого sync HTTP-клиента (requests) — быстрее, но не масштабируемо (предпочту async/httpx).

Вариант B: сразу реализовать streaming (если провайдер поддерживает) — лучше UX (streaming генерации), но сложнее в реализации/тестировании; отложить на M4.

Вариант C: использовать RAG (Qdrant) для подстановки похожих ранее сгенерированных тестов в prompt — рекомендую на M4.

6) Что агенту нужно проверить перед началом

Прочитать текущие файлы: orchestrator.py, prompt_builder.py (если есть), local_llm_stub.py, parser.py, planner_stub.py, generate.py.

Удостовериться, что интерфейс LLMService в libs/integrations/interfaces/llm.py соответствует предлагаемому (или адаптировать).

Проверить, что .env содержит LLM_API_KEY и что .gitignore содержит .env.

Запустить локальные unit-tests до правок, чтобы иметь baseline.

Выполнять изменения на новой ветке, коммитить по шагам.

7) Примеры кода — для быстрой вставки (копировать в файлы)

qwen_client.py (пример, вставить и адаптировать под реальную API):

# ai/libs/systems/llm/qwen_client.py
import asyncio
from typing import Optional
import httpx
from libs.shared.config import settings
from libs.integrations.interfaces.llm import LLMService

class LLMError(RuntimeError):
    pass

class QwenLLMClient(LLMService):
    def __init__(self, api_key: Optional[str] = None, base_url: Optional[str] = None, timeout: int = 30):
        self.api_key = api_key or settings.LLM_API_KEY
        self.base_url = base_url or settings.LLM_BASE_URL or "https://api.qwen.example/v1/generate"
        self.timeout = timeout
        if not self.api_key:
            raise LLMError("LLM API key is not configured")

    def generate(self, prompt: str) -> str:
        return asyncio.get_event_loop().run_until_complete(self.agenerate(prompt))

    async def agenerate(self, prompt: str) -> str:
        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        payload = {"prompt": prompt, "max_tokens": 1500}
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            try:
                r = await client.post(self.base_url, json=payload, headers=headers)
                r.raise_for_status()
            except httpx.HTTPError as e:
                raise LLMError(f"LLM request failed: {e}") from e
            data = r.json()
            # Provider-specific parsing — adapt below:
            text = data.get("text") or data.get("result") or data.get("data")
            if text is None:
                raise LLMError(f"Unexpected LLM response: {data}")
            return text


validator snippet (py_compile):

import py_compile
def validate_generated_code(path: str) -> tuple[bool, str]:
    try:
        py_compile.compile(path, doraise=True)
    except py_compile.PyCompileError as e:
        return False, str(e)
    # check for at least one test function
    text = open(path, encoding="utf-8").read()
    if "def test_" not in text:
        return False, "No test function found"
    return True, ""

8) Короткий итог (что передать agentу)

Скопируй весь этот PROMPT в cursor. Проси его:

сначала сделать реализацию и unit-tests (локально),

затем добавить gated integration test,

затем прогнать pytest tests/unit и (опционально) интеграционный тест при ключе,

закончить коммитами по шагам и дать вывод pytest -q + пример успешного GET /v1/runs/<run_id> + содержимое сгенерированного артефакта.