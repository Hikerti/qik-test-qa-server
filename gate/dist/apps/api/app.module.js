"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const _infractract_1 = require("../../libs/infractract/src");
const _systems_1 = require("../../libs/systems/src");
const microservices_1 = require("@nestjs/microservices");
const auth_module_1 = require("./auth/auth.module");
const chats_module_1 = require("./chats/chats.module");
const messages_module_1 = require("./messages/messages.module");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const _domains_1 = require("../../libs/domains/src");
const ConfigModuleForRoot = _infractract_1.ConfigProvider.forRoot(['database', 's3', 'jwt', 'nats'], 'gate');
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            ConfigModuleForRoot,
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: ['nats://nats:4222'],
                    },
                },
                {
                    name: 'CHATS_SERVICE',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: ['nats://nats:4222'],
                    },
                },
                {
                    name: 'MESSAGES_SERVICE',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: ['nats://nats:4222'],
                    },
                },
                {
                    name: 'AUTH_SERVICE',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: ['nats://nats:4222'],
                    },
                },
                {
                    name: 'AI_GENERATE',
                    transport: microservices_1.Transport.NATS,
                    options: {
                        servers: ['nats://nats:4222'],
                    },
                },
            ]),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [ConfigModuleForRoot],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DATABASE_HOST'),
                    port: configService.get('DATABASE_PORT'),
                    username: configService.get('DATABASE_USER'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    entities: [_domains_1.User],
                    synchronize: true,
                }),
            }),
            _infractract_1.LoggerModule,
            _systems_1.JwtModule,
            typeorm_1.TypeOrmModule,
            auth_module_1.AuthModule,
            chats_module_1.ChatsModule,
            messages_module_1.MessagesModule,
            user_module_1.UserModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map