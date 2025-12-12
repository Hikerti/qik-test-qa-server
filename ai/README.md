# AI Subproject

Описание подпроекта AI для автоматической генерации тестов.

## Установка

```bash
# Установка зависимостей
pip install -r requirements.txt

# Разработка: установка библиотек в editable mode
./scripts/setup_dev_env.sh
```

## Запуск

```bash
# Локальный демо-запуск pipeline
./scripts/run_local_demo.sh
```

## LLM конфигурация (.env)

В `.env` (не коммитить) можно указать:
```
LLM_API_KEY=your_qwen_key
LLM_BASE_URL=https://foundation-models.api.cloud.ru/v1/chat/completions
LLM_MODEL=Qwen/Qwen3-Coder-480B-A35B-Instruct
LLM_TEMPERATURE=0.5
LLM_TOP_P=0.95
USE_REAL_LLM=true  # иначе используется LocalLLMStub
```

Без ключа автоматически используется локальный stub.

## Быстрый демо-запуск

1) Запустить API:
```
cd ai
$env:PYTHONPATH=".;apps/api/src"
uvicorn ai_api.main:app --app-dir apps/api/src --reload --port 8000
```
2) В другом окне:
```
cd ai
.\run_and_execute.ps1 -example 1   # ping
.\run_and_execute.ps1 -example 2   # GET /echo?msg
.\run_and_execute.ps1 -example 3   # POST /items
```
Скрипт сам отправит POST /v1/generate, подождёт статус и запустит pytest по артефакту.

## Полный запуск с нуля (локально, без Docker)

1) Завести окружение:
```
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

2) Поднять NATS (отдельно от compose):
```
docker run --rm -p 4222:4222 -p 8222:8222 nats:latest -DV
```
Адреса: `nats://localhost:4222` (локально), в compose — `nats://nats:4222`.

3) Настроить переменные окружения (реальный Qwen):
```
$env:NATS_URL="nats://localhost:4222"
$env:USE_REAL_LLM="true"
$env:LLM_API_KEY="<qwen_api_key>"
$env:LLM_BASE_URL="https://foundation-models.api.cloud.ru/v1/chat/completions"
$env:LLM_MODEL="Qwen/Qwen3-Coder-480B-A35B-Instruct"
$env:LLM_TEMPERATURE="0.5"
$env:LLM_TOP_P="0.95"
# для пушей/PR
$env:GITHUB_PAT="<github_pat_with_repo_rights>"
```

4) PYTHONPATH для воркера (важно для импортов):
```
cd <repo_root>\qik-test-qa-server
$env:PYTHONPATH="ai;ai\apps\worker\src"
python -m ai_worker.nats_worker
```
Если хотите использовать модульный путь из корня: `$env:PYTHONPATH="ai"; python -m apps.worker.src.ai_worker.nats_worker` (добавьте `ai\apps\worker\src` при необходимости, если не находится пакет `ai_worker`).

5) Отправить generate через NATS (пример):
```python
import asyncio, json
from nats.aio.client import Client as NATS

async def main():
    nc = NATS()
    await nc.connect("nats://127.0.0.1:4222")
    req = {
      "request_id":"req-demo-1",
      "spec":{"openapi":"3.0.0","info":{"title":"demo","version":"1.0.0"},"paths":{}},
      "callback_subject":"ai.responses.demo"
    }
    await nc.publish("ai.generate_tests", json.dumps(req).encode())
    async def cb(msg): print(msg.data.decode())
    await nc.subscribe("ai.responses.demo", cb=cb)
    await asyncio.sleep(10)
    await nc.drain()
asyncio.run(main())
```
В ответе придёт `run_id` и `artifact_path`.

6) Отправить commit/push (dry-run или реальный push/PR):
```python
req = {
  "request_id":"cicd-"+__import__("uuid").uuid4().hex[:8],
  "run_id":"<PUT_RUN_ID_FROM_GENERATE>",
  "repo":"https://github.com/your/test-repo.git",
  "branch":"ai/generated/test-run",
  "target_branch":"main",
  "commit_message":"Add AI generated tests (dry-run)",
  "create_pr": True,
  "dry_run": True,          # false для реального пуша
  "callback_subject":"ai.responses.demo"
}
# publish to ai.cicd.commit_push и слушать ai.responses.demo
```
События: `committing` → `preview` (diff) для dry-run, либо `pushed` → `pr_created` → `finished` при реальном пуше.



## NATS
Рабочий URL для кластера: `nats://nats:4222`  
Локально: `nats://localhost:4222`



## Структура

См. `structure.md` для детальной структуры проекта.



---
.venv/Scripts/Activate.ps1