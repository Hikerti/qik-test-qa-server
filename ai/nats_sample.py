# REQUEST (Запрашивающий)

# import asyncio
# from nats.aio.client import Client as NATS
# import json

# NATS_SERVERS = ["nats://localhost:4222"]


# async def request_user_data(user_id: int):
#     nc = NATS()
#     try:
#         await nc.connect(servers=NATS_SERVERS)
#         print(f"-> Запрос данных пользователя {user_id} у NestJS...")

#         msg = await nc.request(
#             "data.users.get_by_id",
#             json.dumps({"userId": user_id}).encode()
#         )

#         response_data = json.loads(msg.data.decode())
#         print(f"<- Ответ получен: {response_data}")
#         return response_data

#     except Exception as e:
#         print(f"Ошибка NATS: {e}")
#         return {"error": str(e)}

#     finally:
#         await nc.close()

# FASTAPI + NATS LISTENER

# from fastapi import FastAPI
# from .nats_client import request_user_data

# app = FastAPI()
# nc = NATS()

# NATS_SERVERS = ["nats://localhost:4222"]


# async def ai_handler(msg):
#     reply = msg.reply

#     try:
#         data = json.loads(msg.data.decode())
#         prompt = data.get("prompt")
#     except json.JSONDecodeError:
#         await nc.publish(reply, json.dumps({"error": "Invalid JSON"}).encode())
#         return

#     print(f"Получен AI-запрос. Prompt: '{prompt}'")

#     if "db_data_needed" in prompt:
#         user_data = await request_user_data(123)
#         ai_response = f"Анализ на основе данных: {user_data.get('name')}. Результат AI: OK."
#     else:
#         ai_response = f"Простой анализ для: {prompt}"

#     response_payload = {
#         "analysis_result": ai_response,
#         "agent_source": "FastAPI AI Agent",
#     }

#     await nc.publish(reply, json.dumps(response_payload).encode())


# @app.on_event("startup")
# async def startup_event():
#     await nc.connect(servers=NATS_SERVERS)
#     await nc.subscribe("ai.analyze.text", cb=ai_handler)
#     print("FastAPI AI Agent слушает 'ai.analyze.text'")


# @app.on_event("shutdown")
# async def shutdown_event():
#     await nc.close()


# @app.get("/")
# def root():
#     return {"message": "FastAPI AI Agent is running"}

# TEST

# import pytest
# from unittest.mock import AsyncMock, patch


# @pytest.mark.asyncio
# async def test_request_user_data_success():
#     mock_response_data = b'{"id": 1, "name": "Mocked User", "email": "mock@test.com"}'
#     mock_msg = AsyncMock()
#     mock_msg.data = mock_response_data

#     with patch('ai_agent.nats_client.NATS') as MockNATS:
#         MockNATS.return_value.request = AsyncMock(return_value=mock_msg)
#         MockNATS.return_value.connect = AsyncMock()
#         MockNATS.return_value.close = AsyncMock()

#         result = await request_user_data(user_id=1)

#         assert result["name"] == "Mocked User"
#         assert MockNATS.return_value.request.called
