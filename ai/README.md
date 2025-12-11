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

## Структура

См. `structure.md` для детальной структуры проекта.

! чекнуть натс 
! nats://nats:4222
! но для локали nats://localhost:4222