# deps
FROM oven/bun:1.3 AS deps

WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# build
FROM deps AS build

ARG SERVICE_NAME

WORKDIR /app

COPY gate/libs ./gate/libs
COPY gate/apps/$SERVICE_NAME ./gate/apps/$SERVICE_NAME
COPY gate/tsconfig*.json gate/nest-cli.json ./

RUN if [ -n "$SERVICE_NAME" ]; then \
      echo "🚀 Building $SERVICE_NAME" && \
      bun run build $SERVICE_NAME; \
    else \
      echo "❌ SERVICE_NAME is not set" >&2 && exit 1; \
    fi

# runtime
FROM oven/bun:1.3-slim AS runtime

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist/apps/$SERVICE_NAME ./dist/apps/$SERVICE_NAME
COPY envs/${ENVIRONMENT} ./envs/${ENVIRONMENT}

ENV SERVICE_NAME=$SERVICE_NAME
ENV ENVIRONMENT=$ENVIRONMENT

EXPOSE 3000
CMD ["sh", "-c", "bun run dist/apps/$SERVICE_NAME/main.js"]
