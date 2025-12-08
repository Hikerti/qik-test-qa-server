ЧТО НУЖНО СЕЙЧАС:
1. Настроить базовую точку входа API
2. Сделать конфиг (libs/shared/config.py) и подключение env.
3. Лёгкий orchestrator skeleton (libs/agents/orchestrator/orchestrator.py) — pure logic, sync.
4. LLM-stub (libs/systems/llm/local_llm_stub.py) и интерфейс LLM (libs/integrations/interfaces/llm.py).
5. Spec loader minimal parser stub (libs/agents/spec_loader/parser.py).
6. Endpoint POST /v1/generate → создает Run в памяти и вызывает orchestrator (async task or background).
7. Unit tests для planner/orchestrator stubs.
