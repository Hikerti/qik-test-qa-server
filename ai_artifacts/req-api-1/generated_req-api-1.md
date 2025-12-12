# Manual API Cases
- ID: API-VM-001
  Title: GET /vms возвращает 200
  Preconditions: Bearer токен валиден
  Steps:
    1. GET /vms
  Expected: 200, список ВМ, schema ok
- ID: API-VM-002
  Title: GET /vms с невалидным UUID
  Preconditions: Bearer токен валиден
  Steps:
    1. GET /vms/123
  Expected: 400 или 404