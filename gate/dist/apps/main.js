"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const swagger_1 = require("@nestjs/swagger");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("@nestjs/config");
const cors_1 = require("@fastify/cors");
const helmet_1 = require("@fastify/helmet");
const multipart_1 = require("@fastify/multipart");
const cookie_1 = require("@fastify/cookie");
const app_module_1 = require("./app.module");
const logger_1 = require("../libs/infractract/src/logger");
const validation_1 = require("../libs/infractract/src/validation");
const http_1 = require("../libs/infractract/src/http");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    const config = app.get(config_1.ConfigService);
    await app.register(cors_1.default, {
        origin: (origin, cb) => {
            if (!origin) {
                cb(null, true);
                return;
            }
            cb(null, true);
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    await app.register(helmet_1.default, {
        contentSecurityPolicy: false,
    });
    await app.register(cookie_1.default);
    await app.register(multipart_1.default, {
        limits: {
            fileSize: 10 * 1024 * 1024,
        },
    });
    app.connectMicroservice({
        transport: microservices_1.Transport.NATS,
        options: {
            servers: ['nats://localhost:4222'],
        },
    });
    app.setGlobalPrefix('api');
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: '1',
        prefix: 'v',
    });
    const loggerService = app.get(logger_1.LoggerService);
    app.useLogger(loggerService);
    app.useGlobalPipes(new common_1.ValidationPipe(new validation_1.ValidationPipeOptions()));
    app.useGlobalFilters(new http_1.HttpValidationErrorFilter(loggerService), new http_1.HttpErrorFilter(loggerService), new http_1.HttpUnhandledErrorFilter(loggerService));
    app.useGlobalInterceptors(new http_1.HttpResponsePackageInterceptor());
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, new swagger_1.DocumentBuilder().build());
    swagger_1.SwaggerModule.setup('api/v1/docs/swagger', app, swaggerDocument, {});
    app.getHttpAdapter().get('/api/v1/docs', (_, reply) => {
        reply.type('text/html').send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body style="margin:0">
          <redoc spec-url='/api/v1/docs/swagger-json' expand-responses="200,201"></redoc>
          <script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"></script>
        </body>
      </html>
   `);
    });
    await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.NATS,
        options: {
            servers: ['nats://localhost:4222'],
        },
    });
    await app.listen(config.get('GATE_HTTP_PORT'), '0.0.0.0');
}
bootstrap().catch(console.error);
//# sourceMappingURL=main.js.map