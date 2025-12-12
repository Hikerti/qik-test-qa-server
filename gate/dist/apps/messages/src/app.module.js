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
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const messages_module_1 = require("./messages/messages.module");
const _domains_1 = require("../../../libs/domains/src");
const _infractract_1 = require("../../../libs/infractract/src");
const ConfigModuleForRoot = _infractract_1.ConfigProvider.forRoot(['database', 's3', 'jwt', 'nats'], 'gate');
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            ConfigModuleForRoot,
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
                    entities: [_domains_1.User, _domains_1.Messages, _domains_1.Chats],
                    synchronize: true,
                }),
            }),
            typeorm_1.TypeOrmModule,
            messages_module_1.MessagesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map