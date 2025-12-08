FROM python:3.12-alpine

WORKDIR /app

ARG SERVICE_NAME

COPY ai/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY ai/apps/$SERVICE_NAME ./apps/$SERVICE_NAME

ENV SERVICE_NAME=$SERVICE_NAME
ENV PYTHONUNBUFFERED=1

EXPOSE 8000
CMD ["sh", "-c", "uvicorn apps/$SERVICE_NAME.main:app --host 0.0.0.0 --port 8000"]
