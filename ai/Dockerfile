FROM python:3.12-slim

WORKDIR /app

COPY apps/api/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY apps/api/src/ai_api ./ai_api

ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/app

EXPOSE 8000

CMD ["uvicorn", "ai_api.main:app", "--host", "0.0.0.0", "--port", "8000"]