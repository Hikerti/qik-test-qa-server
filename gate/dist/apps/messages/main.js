/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(4);
const config_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(6);
const messages_module_1 = __webpack_require__(7);
const _domains_1 = __webpack_require__(8);
const _infractract_1 = __webpack_require__(94);
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


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesModule = void 0;
const common_1 = __webpack_require__(4);
const _domains_1 = __webpack_require__(8);
const messages_service_1 = __webpack_require__(92);
const messages_controller_1 = __webpack_require__(93);
let MessagesModule = class MessagesModule {
};
exports.MessagesModule = MessagesModule;
exports.MessagesModule = MessagesModule = __decorate([
    (0, common_1.Module)({
        providers: [messages_service_1.MessagesService, _domains_1.MessagesRepository],
        controllers: [messages_controller_1.MessagesController],
    })
], MessagesModule);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(81), exports);
__exportStar(__webpack_require__(86), exports);
__exportStar(__webpack_require__(90), exports);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(88), exports);
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = exports.Theme = void 0;
const typeorm_1 = __webpack_require__(11);
const chats_1 = __webpack_require__(12);
const user_auth_method_1 = __webpack_require__(86);
var Theme;
(function (Theme) {
    Theme["LIGHT"] = "light";
    Theme["DARK"] = "dark";
})(Theme || (exports.Theme = Theme = {}));
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "gitHubId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Theme,
        default: Theme.LIGHT,
    }),
    __metadata("design:type", String)
], User.prototype, "theme", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp with time zone' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'last_sent_at',
        type: 'timestamp with time zone',
        nullable: true,
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "lastSentAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chats_1.Chats, (chat) => chat.user),
    __metadata("design:type", Array)
], User.prototype, "chats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_auth_method_1.UserAuthMethod, (authMethod) => authMethod.user),
    __metadata("design:type", Array)
], User.prototype, "authMethods", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(80), exports);
__exportStar(__webpack_require__(85), exports);


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatsDTO = void 0;
const swagger_1 = __webpack_require__(14);
const _shared_1 = __webpack_require__(15);
const class_validator_1 = __webpack_require__(68);
let ChatsDTO = class ChatsDTO {
    static fromModel(model) {
        return {
            id: model.id,
            title: model.title,
            createdAt: model.createdAt,
        };
    }
};
exports.ChatsDTO = ChatsDTO;
__decorate([
    (0, _shared_1.IdField)(),
    __metadata("design:type", String)
], ChatsDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChatsDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ChatsDTO.prototype, "createdAt", void 0);
exports.ChatsDTO = ChatsDTO = __decorate([
    (0, _shared_1.ApiSchemaName)('ChatsDTO')
], ChatsDTO);
(function (ChatsDTO) {
    let Create = class Create extends (0, swagger_1.OmitType)(ChatsDTO, ['id', 'createdAt']) {
    };
    Create = __decorate([
        (0, _shared_1.ApiSchemaName)('ChatsCreateDTO')
    ], Create);
    ChatsDTO.Create = Create;
    let Update = class Update extends (0, swagger_1.PartialType)(ChatsDTO.Create) {
    };
    Update = __decorate([
        (0, _shared_1.ApiSchemaName)('ChatsUpdateDTO')
    ], Update);
    ChatsDTO.Update = Update;
})(ChatsDTO || (exports.ChatsDTO = ChatsDTO = {}));


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(64), exports);
__exportStar(__webpack_require__(69), exports);
__exportStar(__webpack_require__(72), exports);
__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpContractData = void 0;
__exportStar(__webpack_require__(17), exports);
var data_1 = __webpack_require__(61);
Object.defineProperty(exports, "HttpContractData", ({ enumerable: true, get: function () { return data_1.Data; } }));
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(62), exports);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplyHttpMethodContract = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(14);
const _systems_1 = __webpack_require__(19);
const utility_1 = __webpack_require__(60);
const ApplyHttpMethodContract = (contract) => {
    const decorators = [
        utility_1.Utility.formMethodDecorator(contract?.method, contract?.path),
        (0, swagger_1.ApiOperation)({
            summary: contract?.name,
            description: contract?.description,
        }),
        contract?.ResponseBody &&
            (0, swagger_1.ApiOkResponse)({
                type: contract?.ResponseBody,
            }),
        contract?.jwt ? (0, _systems_1.UseJWTGuard)(contract.jwt) : null,
    ];
    return (0, common_1.applyDecorators)(...decorators.filter(Boolean));
};
exports.ApplyHttpMethodContract = ApplyHttpMethodContract;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(57), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtService = void 0;
const common_1 = __webpack_require__(4);
const types_1 = __webpack_require__(22);
const resolvers_1 = __webpack_require__(25);
const http_1 = __webpack_require__(32);
let JwtService = class JwtService {
    constructor(resolver) {
        this.resolver = resolver;
    }
    getMaxAge(tokenType) {
        return this.resolver.getMaxAge(tokenType);
    }
    signToken(payload, type) {
        try {
            return this.resolver.sign(type, payload);
        }
        catch (error) {
            console.error(error);
            throw new http_1.HttpError({
                code: 'unhandled_error',
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: `Can't sign Token(type=${type})`,
            });
        }
    }
    verifyToken(token, type) {
        try {
            return this.resolver.verify(type, token);
        }
        catch (error) {
            throw new http_1.HttpError({
                code: 'token_invalid',
                status: common_1.HttpStatus.UNAUTHORIZED,
                message: `Token(type=${type}) invalid`,
            });
        }
    }
    signAuthTokens(payload) {
        return {
            access: this.signToken(payload, types_1.TokenType.Access),
            refresh: this.signToken(payload, types_1.TokenType.Refresh),
        };
    }
};
exports.JwtService = JwtService;
exports.JwtService = JwtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof resolvers_1.TokenResolverService !== "undefined" && resolvers_1.TokenResolverService) === "function" ? _a : Object])
], JwtService);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType["Access"] = "access";
    TokenType["Refresh"] = "refresh";
})(TokenType || (exports.TokenType = TokenType = {}));


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseTokenResolver = void 0;
class BaseTokenResolver {
    constructor(config) {
        this.config = config;
    }
}
exports.BaseTokenResolver = BaseTokenResolver;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenResolver = void 0;
const jsonwebtoken_1 = __webpack_require__(29);
const base_token_resolver_1 = __webpack_require__(27);
class AccessTokenResolver extends base_token_resolver_1.BaseTokenResolver {
    get secret() {
        return this.config.get('JWT_ACCESS_TOKEN_SECRET');
    }
    get maxAge() {
        return 5 * 60 * 1000;
    }
    sign(payload) {
        return (0, jsonwebtoken_1.sign)(payload, this.secret, {
            expiresIn: this.maxAge,
        });
    }
    verify(token) {
        return (0, jsonwebtoken_1.verify)(token, this.secret);
    }
}
exports.AccessTokenResolver = AccessTokenResolver;


/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenResolver = void 0;
const jsonwebtoken_1 = __webpack_require__(29);
const base_token_resolver_1 = __webpack_require__(27);
class RefreshTokenResolver extends base_token_resolver_1.BaseTokenResolver {
    get secret() {
        return this.config.get('JWT_REFRESH_TOKEN_SECRET');
    }
    get maxAge() {
        return 7 * 24 * 60 * 60 * 1000;
    }
    sign(payload) {
        return (0, jsonwebtoken_1.sign)(payload, this.secret, {
            expiresIn: this.maxAge,
        });
    }
    verify(token) {
        return (0, jsonwebtoken_1.verify)(token, this.secret);
    }
}
exports.RefreshTokenResolver = RefreshTokenResolver;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenResolverService = void 0;
const config_1 = __webpack_require__(5);
const common_1 = __webpack_require__(4);
const types_1 = __webpack_require__(22);
const access_token_resolver_1 = __webpack_require__(28);
const refresh_token_resolver_1 = __webpack_require__(30);
let TokenResolverService = class TokenResolverService {
    constructor(configService) {
        this.configService = configService;
        this._jwtType2TokenConvertor = {
            [types_1.TokenType.Access]: new access_token_resolver_1.AccessTokenResolver(this.configService),
            [types_1.TokenType.Refresh]: new refresh_token_resolver_1.RefreshTokenResolver(this.configService),
        };
    }
    getMaxAge(tokenType) {
        return this._jwtType2TokenConvertor[tokenType].maxAge;
    }
    sign(tokenType, payload) {
        return this._jwtType2TokenConvertor[tokenType].sign(payload, tokenType);
    }
    verify(tokenType, token) {
        return this._jwtType2TokenConvertor[tokenType].verify(token, tokenType);
    }
};
exports.TokenResolverService = TokenResolverService;
exports.TokenResolverService = TokenResolverService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], TokenResolverService);


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpResponsePackageInterceptor = void 0;
const common_1 = __webpack_require__(4);
const rxjs_1 = __webpack_require__(35);
const response_1 = __webpack_require__(36);
let HttpResponsePackageInterceptor = class HttpResponsePackageInterceptor {
    intercept(_, next) {
        return next.handle().pipe((0, rxjs_1.map)((payload) => {
            return new response_1.HttpResponse({
                code: 'ok',
                payload: payload || null,
            });
        }));
    }
};
exports.HttpResponsePackageInterceptor = HttpResponsePackageInterceptor;
exports.HttpResponsePackageInterceptor = HttpResponsePackageInterceptor = __decorate([
    (0, common_1.Injectable)()
], HttpResponsePackageInterceptor);


/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpResponse = void 0;
const swagger_1 = __webpack_require__(14);
const types_1 = __webpack_require__(37);
class HttpResponse {
    constructor(response) {
        this.code = response.code;
        this.message = response.message;
        this.payload = response.payload;
    }
}
exports.HttpResponse = HttpResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: types_1.Http.Code.Enum, example: types_1.Http.Code.Enum.OK }),
    __metadata("design:type", typeof (_a = typeof types_1.Http !== "undefined" && types_1.Http.Code) === "function" ? _a : Object)
], HttpResponse.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], HttpResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], HttpResponse.prototype, "payload", void 0);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Http = void 0;
var Http;
(function (Http) {
    let Code;
    (function (Code) {
        let Enum;
        (function (Enum) {
            Enum["OK"] = "ok";
            Enum["BAD_REQUEST"] = "bad_request";
            Enum["TOKEN_INVALID"] = "token_invalid";
            Enum["TOKEN_NOT_PROVIDED"] = "token_not_provided";
            Enum["WRONG_AUTH_DATA"] = "wrong_auth_data";
            Enum["NOT_ALLOWED"] = "not_allowed";
            Enum["USER_NOT_FOUND"] = "user_not_found";
            Enum["BUSINESS_NOT_FOUND"] = "business_not_found";
            Enum["CLIENT_NOT_FOUND"] = "client_not_found";
            Enum["PAYMENT_PROVIDER_NOT_FOUND"] = "payment_provider_not_found";
            Enum["BOT_NOT_FOUND"] = "bot_not_found";
            Enum["PAGE_NOT_FOUND"] = "page_not_found";
            Enum["BLOCK_NOT_FOUND"] = "block_not_found";
            Enum["PRODUCT_NOT_FOUND"] = "product_not_found";
            Enum["CATEGORY_NOT_FOUND"] = "category_not_found";
            Enum["PARAM_NOT_FOUND"] = "param_not_found";
            Enum["PARAM_VARIANT_NOT_FOUND"] = "param_variant_not_found";
            Enum["ORDER_NOT_FOUND"] = "order_not_found";
            Enum["CART_ITEM_NOT_FOUND"] = "cart_item_not_found";
            Enum["PRODUCT_FAVORITE_NOT_FOUND"] = "product_favorite_not_found";
            Enum["UNHANDLED_ERROR"] = "unhandled_error";
        })(Enum = Code.Enum || (Code.Enum = {}));
    })(Code = Http.Code || (Http.Code = {}));
})(Http || (exports.Http = Http = {}));


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpErrorFilter = void 0;
const common_1 = __webpack_require__(4);
const error_1 = __webpack_require__(40);
const response_1 = __webpack_require__(36);
const logger_1 = __webpack_require__(41);
const LOG_TAG = 'HttpErrorFilter';
let HttpErrorFilter = class HttpErrorFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(error, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        this.logger.error(LOG_TAG + `|catch Handled error [status=${error.status}] [code=${error.code}] ${error.message}`);
        res.code(error.status).send(new response_1.HttpResponse({
            code: error.code,
            payload: null,
            message: error?.message,
        }));
    }
};
exports.HttpErrorFilter = HttpErrorFilter;
exports.HttpErrorFilter = HttpErrorFilter = __decorate([
    (0, common_1.Catch)(error_1.HttpError),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_1.LoggerService !== "undefined" && logger_1.LoggerService) === "function" ? _a : Object])
], HttpErrorFilter);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpError = void 0;
class HttpError {
    constructor(response) {
        this.status = response.status;
        this.code = response.code;
        this.message = response.message;
    }
}
exports.HttpError = HttpError;


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(43), exports);


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerModule = void 0;
const common_1 = __webpack_require__(4);
const logger_service_1 = __webpack_require__(43);
let LoggerModule = class LoggerModule {
};
exports.LoggerModule = LoggerModule;
exports.LoggerModule = LoggerModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [logger_service_1.LoggerService],
        exports: [logger_service_1.LoggerService],
    })
], LoggerModule);


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerService = void 0;
const common_1 = __webpack_require__(4);
let LoggerService = class LoggerService extends common_1.ConsoleLogger {
    d(logTag, message, values) {
        super.debug(this.formMessage(logTag, message), values);
    }
    l(logTag, message, values) {
        super.log(this.formMessage(logTag, message), values);
    }
    w(logTag, message, values) {
        super.warn(this.formMessage(logTag, message), values);
    }
    e(logTag, message, values) {
        super.warn(this.formMessage(logTag, message), values);
    }
    f(logTag, message, values) {
        super.fatal(this.formMessage(logTag, message), values);
    }
    formMessage(logTag, message) {
        return logTag + ' ' + message;
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)()
], LoggerService);


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpUnhandledErrorFilter = void 0;
const common_1 = __webpack_require__(4);
const response_1 = __webpack_require__(36);
const logger_1 = __webpack_require__(41);
const LOG_TAG = 'HttpUnhandledErrorFilter';
let HttpUnhandledErrorFilter = class HttpUnhandledErrorFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        this.logger.error(LOG_TAG + `|catch Unhandled error: ` + exception.stack);
        res.code(500).send(new response_1.HttpResponse({
            code: 'unhandled_error',
            payload: null,
        }));
    }
};
exports.HttpUnhandledErrorFilter = HttpUnhandledErrorFilter;
exports.HttpUnhandledErrorFilter = HttpUnhandledErrorFilter = __decorate([
    (0, common_1.Catch)(Error),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_1.LoggerService !== "undefined" && logger_1.LoggerService) === "function" ? _a : Object])
], HttpUnhandledErrorFilter);


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpValidationErrorFilter = void 0;
const common_1 = __webpack_require__(4);
const response_1 = __webpack_require__(36);
const validation_1 = __webpack_require__(46);
const logger_1 = __webpack_require__(41);
const LOG_TAG = 'HttpValidationErrorFilter';
let HttpValidationErrorFilter = class HttpValidationErrorFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        this.logger.error(LOG_TAG + `|catch Wrong request: ${exception.message}`);
        res.code(400).send(new response_1.HttpResponse({
            code: 'bad_request',
            payload: null,
            message: exception.message,
        }));
    }
};
exports.HttpValidationErrorFilter = HttpValidationErrorFilter;
exports.HttpValidationErrorFilter = HttpValidationErrorFilter = __decorate([
    (0, common_1.Catch)(validation_1.CustomValidationError),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_1.LoggerService !== "undefined" && logger_1.LoggerService) === "function" ? _a : Object])
], HttpValidationErrorFilter);


/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipeOptions = void 0;
const custom_validation_error_1 = __webpack_require__(48);
class ValidationPipeOptions {
    constructor() {
        this.transform = true;
        this.exceptionFactory = this.exceptionFactory.bind(this);
    }
    exceptionFactory(errors) {
        const message = ValidationPipeOptions.handleErrorsArray(errors);
        return new custom_validation_error_1.CustomValidationError({ message });
    }
}
exports.ValidationPipeOptions = ValidationPipeOptions;
(function (ValidationPipeOptions) {
    ValidationPipeOptions.handleSingleError = (e) => {
        if (e.constraints)
            return Object.values(e.constraints).join('; ');
        if (e.children)
            return e.children.map(ValidationPipeOptions.handleSingleError).join('; ');
        return null;
    };
    ValidationPipeOptions.handleErrorsArray = (errors) => errors.map(ValidationPipeOptions.handleSingleError).filter(Boolean).join('; ');
})(ValidationPipeOptions || (exports.ValidationPipeOptions = ValidationPipeOptions = {}));


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomValidationError = void 0;
class CustomValidationError {
    constructor(e) {
        this.message = e.message;
    }
}
exports.CustomValidationError = CustomValidationError;


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtModule = void 0;
const common_1 = __webpack_require__(4);
const config_1 = __webpack_require__(5);
const jwt_service_1 = __webpack_require__(21);
const extractors_1 = __webpack_require__(50);
const resolvers_1 = __webpack_require__(25);
let JwtModule = class JwtModule {
};
exports.JwtModule = JwtModule;
exports.JwtModule = JwtModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        exports: [jwt_service_1.JwtService, extractors_1.TokenExtractorService, resolvers_1.TokenResolverService],
        providers: [jwt_service_1.JwtService, extractors_1.TokenExtractorService, resolvers_1.TokenResolverService],
    })
], JwtModule);


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(51), exports);
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(54), exports);
__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenExtractor = void 0;
const common_1 = __webpack_require__(4);
const constants_1 = __webpack_require__(53);
let AccessTokenExtractor = class AccessTokenExtractor {
    extract(request) {
        return request?.cookies?.[constants_1.ACCESS_TOKEN_COOKIE_NAME] ?? null;
    }
};
exports.AccessTokenExtractor = AccessTokenExtractor;
exports.AccessTokenExtractor = AccessTokenExtractor = __decorate([
    (0, common_1.Injectable)()
], AccessTokenExtractor);


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ACCESS_TOKEN_COOKIE_NAME = exports.REFRESH_TOKEN_COOKIE_NAME = exports.REQUEST_TOKEN_PAYLOAD_FIELD = void 0;
exports.REQUEST_TOKEN_PAYLOAD_FIELD = '__tokens';
exports.REFRESH_TOKEN_COOKIE_NAME = 'refresh_token';
exports.ACCESS_TOKEN_COOKIE_NAME = 'access_token';


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenExtractor = void 0;
const common_1 = __webpack_require__(4);
const constants_1 = __webpack_require__(53);
let RefreshTokenExtractor = class RefreshTokenExtractor {
    extract(request) {
        return request?.cookies?.[constants_1.REFRESH_TOKEN_COOKIE_NAME] ?? null;
    }
};
exports.RefreshTokenExtractor = RefreshTokenExtractor;
exports.RefreshTokenExtractor = RefreshTokenExtractor = __decorate([
    (0, common_1.Injectable)()
], RefreshTokenExtractor);


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenExtractorService = void 0;
const types_1 = __webpack_require__(22);
const access_token_extractor_1 = __webpack_require__(52);
const refresh_token_extractor_1 = __webpack_require__(54);
class TokenExtractorService {
    constructor() {
        this._jwtTypeToTokenExtractor = {
            [types_1.TokenType.Access]: new access_token_extractor_1.AccessTokenExtractor(),
            [types_1.TokenType.Refresh]: new refresh_token_extractor_1.RefreshTokenExtractor(),
        };
    }
    extract(type, request) {
        return this._jwtTypeToTokenExtractor[type].extract(request);
    }
}
exports.TokenExtractorService = TokenExtractorService;


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtGuard = void 0;
const common_1 = __webpack_require__(4);
const core_1 = __webpack_require__(1);
const decorators_1 = __webpack_require__(57);
const _systems_1 = __webpack_require__(19);
const resolvers_1 = __webpack_require__(25);
const extractors_1 = __webpack_require__(50);
const http_1 = __webpack_require__(32);
let JwtGuard = class JwtGuard {
    constructor(reflector, extractor, tokenConverterService) {
        this.reflector = reflector;
        this.extractor = extractor;
        this.tokenConverterService = tokenConverterService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const options = this.reflector.get(decorators_1.UseJWTGuard, context.getHandler());
        if (!options) {
            return true;
        }
        Object.entries(options).forEach(([type, policy]) => {
            const isRequired = policy === 'required';
            const tokenType = type;
            const token = this.extractor.extract(tokenType, request);
            if (!token) {
                if (isRequired) {
                    throw new http_1.HttpError({
                        status: common_1.HttpStatus.UNAUTHORIZED,
                        code: 'token_not_provided',
                        message: `Token [${tokenType}] was not provided for policy [${policy}]`,
                    });
                }
                else {
                    return true;
                }
            }
            try {
                const payload = this.tokenConverterService.verify(tokenType, token);
                this.enrichRequestByToken(request, tokenType, payload);
            }
            catch (e) {
                if (isRequired) {
                    throw new http_1.HttpError({
                        status: common_1.HttpStatus.UNAUTHORIZED,
                        code: 'token_invalid',
                        message: `Token [${tokenType}] signature is invalid`,
                    });
                }
            }
        });
        return true;
    }
    enrichRequestByToken(request, tokenType, payload) {
        if (request[_systems_1.REQUEST_TOKEN_PAYLOAD_FIELD]) {
            request[_systems_1.REQUEST_TOKEN_PAYLOAD_FIELD][tokenType] = payload;
        }
        else {
            request[_systems_1.REQUEST_TOKEN_PAYLOAD_FIELD] = {
                [tokenType]: payload,
            };
        }
    }
};
exports.JwtGuard = JwtGuard;
exports.JwtGuard = JwtGuard = __decorate([
    __param(1, (0, common_1.Inject)(extractors_1.TokenExtractorService)),
    __param(2, (0, common_1.Inject)(resolvers_1.TokenResolverService)),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof extractors_1.TokenExtractorService !== "undefined" && extractors_1.TokenExtractorService) === "function" ? _b : Object, typeof (_c = typeof resolvers_1.TokenResolverService !== "undefined" && resolvers_1.TokenResolverService) === "function" ? _c : Object])
], JwtGuard);


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UseJWTGuard = void 0;
const core_1 = __webpack_require__(1);
exports.UseJWTGuard = core_1.Reflector.createDecorator();


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthTokenPayload = void 0;
const common_1 = __webpack_require__(4);
const _systems_1 = __webpack_require__(19);
const types_1 = __webpack_require__(22);
exports.AuthTokenPayload = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return (request?.[_systems_1.REQUEST_TOKEN_PAYLOAD_FIELD]?.[types_1.TokenType.Access] ||
        request?.[_systems_1.REQUEST_TOKEN_PAYLOAD_FIELD]?.[types_1.TokenType.Refresh]);
});


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utility = void 0;
const common_1 = __webpack_require__(4);
const data_1 = __webpack_require__(61);
class Utility {
}
exports.Utility = Utility;
Utility.formMethodDecorator = (method, path) => {
    switch (method) {
        case data_1.Data.Method.Get:
            return (0, common_1.Get)(path);
        case data_1.Data.Method.Put:
            return (0, common_1.Put)(path);
        case data_1.Data.Method.Patch:
            return (0, common_1.Patch)(path);
        case data_1.Data.Method.Post:
            return (0, common_1.Post)(path);
        case data_1.Data.Method.Delete:
            return (0, common_1.Delete)(path);
        default:
            throw new Error(`Unsupported [method=${method}]`);
    }
};


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Data = void 0;
var Data;
(function (Data) {
    let Method;
    (function (Method) {
        Method["Get"] = "GET";
        Method["Post"] = "POST";
        Method["Put"] = "PUT";
        Method["Delete"] = "DELETE";
        Method["Patch"] = "PATCH";
    })(Method = Data.Method || (Data.Method = {}));
})(Data || (exports.Data = Data = {}));


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplyHttpControllerContract = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(14);
const _systems_1 = __webpack_require__(19);
const ApplyHttpControllerContract = (contract) => {
    const decorators = [(0, swagger_1.ApiTags)(contract.name), (0, common_1.Controller)(contract.path ?? ''), (0, common_1.UseGuards)(_systems_1.JwtGuard)];
    return (0, common_1.applyDecorators)(...decorators.filter(Boolean));
};
exports.ApplyHttpControllerContract = ApplyHttpControllerContract;


/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpResponseBody = void 0;
const swagger_1 = __webpack_require__(14);
const http_1 = __webpack_require__(32);
const HttpResponseBody = (responsePayload) => {
    const payloadName = responsePayload.name;
    const responseName = payloadName.replace(/ResponsePayload$/, 'ResponseBody') || `${payloadName}ResponseBody`;
    class HttpResponseBody extends http_1.HttpResponse {
        constructor(response) {
            super({ code: response.code, message: response.message });
            this.payload = responsePayload;
        }
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: responsePayload }),
        __metadata("design:type", Object)
    ], HttpResponseBody.prototype, "payload", void 0);
    Object.defineProperty(HttpResponseBody, 'name', {
        value: responseName,
    });
    return HttpResponseBody;
};
exports.HttpResponseBody = HttpResponseBody;


/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(65), exports);
__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiSchemaName = void 0;
const ApiSchemaName = (name) => {
    return (constructor) => {
        const wrapper = class extends constructor {
        };
        Object.defineProperty(wrapper, 'name', {
            value: name,
            writable: false,
        });
        return wrapper;
    };
};
exports.ApiSchemaName = ApiSchemaName;


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(67), exports);


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdField = void 0;
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(14);
const class_validator_1 = __webpack_require__(68);
const IdField = (options) => {
    const isOptional = options?.isOptional || false;
    const isArray = options?.each || false;
    const decorators = [];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)({ type: String, isArray }), (0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)({ type: String, isArray }), (0, class_validator_1.IsNotEmpty)());
    }
    decorators.push((0, class_validator_1.IsUUID)(4, { each: isArray }));
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IdField = IdField;


/***/ }),
/* 68 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 69 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(70), exports);


/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationDTO = void 0;
const swagger_1 = __webpack_require__(14);
const class_validator_1 = __webpack_require__(68);
const class_transformer_1 = __webpack_require__(71);
const _shared_1 = __webpack_require__(15);
var PaginationDTO;
(function (PaginationDTO) {
    let Request = class Request {
        constructor() {
            this.page = 1;
            this.limit = 10;
        }
    };
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Request.prototype, "page", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Request.prototype, "limit", void 0);
    Request = __decorate([
        (0, _shared_1.ApiSchemaName)('PaginationRequestDTO')
    ], Request);
    PaginationDTO.Request = Request;
    let Response = class Response {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Total count of pages' }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Response.prototype, "page", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Total count of pages' }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Response.prototype, "total_pages", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Count of items on page' }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Response.prototype, "items_count", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Flag if page is the last one' }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], Response.prototype, "is_last_page", void 0);
    Response = __decorate([
        (0, _shared_1.ApiSchemaName)('PaginationResponseDTO')
    ], Response);
    PaginationDTO.Response = Response;
})(PaginationDTO || (exports.PaginationDTO = PaginationDTO = {}));


/***/ }),
/* 71 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(73), exports);
__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Environment = void 0;
var Environment;
(function (Environment) {
    let Enum;
    (function (Enum) {
        Enum["Local"] = "local";
        Enum["Dev"] = "dev";
        Enum["Prod"] = "prod";
    })(Enum = Environment.Enum || (Environment.Enum = {}));
})(Environment || (exports.Environment = Environment = {}));


/***/ }),
/* 75 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(76), exports);
__exportStar(__webpack_require__(77), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(79), exports);


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateClass = void 0;
const class_transformer_1 = __webpack_require__(71);
const class_validator_1 = __webpack_require__(68);
const validateClass = (schema, object) => {
    const validationConfig = (0, class_transformer_1.plainToInstance)(schema, object, {
        enableImplicitConversion: true,
    });
    const errors = (0, class_validator_1.validateSync)(validationConfig, {
        skipMissingProperties: false,
    });
    if (errors.length > 0) {
        throw Error(`validateClass Class is not valid: ${errors
            .map((e) => e.property + ' must be ' + Object.keys(e.constraints || {}).toLocaleString())
            .join(';')}`);
    }
    return validationConfig;
};
exports.validateClass = validateClass;


/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assert = assert;
function assert(value, message = 'Variable is not defined or is null') {
    if (value === null || value === undefined || value === '') {
        throw new Error(message);
    }
}


/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateCode = generateCode;
function generateCode(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}


/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUTCSeconds = void 0;
const getUTCSeconds = () => Math.round(Date.now() / 1000);
exports.getUTCSeconds = getUTCSeconds;


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Chats = void 0;
const typeorm_1 = __webpack_require__(11);
const user_1 = __webpack_require__(9);
const messages_1 = __webpack_require__(81);
let Chats = class Chats {
};
exports.Chats = Chats;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Chats.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Chats.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Chats.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.chats, { onDelete: 'CASCADE' }),
    __metadata("design:type", typeof (_b = typeof user_1.User !== "undefined" && user_1.User) === "function" ? _b : Object)
], Chats.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Chats.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => messages_1.Messages, (message) => message.chat),
    __metadata("design:type", Array)
], Chats.prototype, "messages", void 0);
exports.Chats = Chats = __decorate([
    (0, typeorm_1.Entity)('chats')
], Chats);


/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(82), exports);
__exportStar(__webpack_require__(83), exports);
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesDTO = void 0;
const swagger_1 = __webpack_require__(14);
const _domains_1 = __webpack_require__(8);
const _shared_1 = __webpack_require__(15);
const class_validator_1 = __webpack_require__(68);
let MessagesDTO = class MessagesDTO {
    static fromModel(model) {
        return {
            id: model.id,
            content: model.content,
            sender: model.sender,
            createdAt: model.createdAt,
        };
    }
};
exports.MessagesDTO = MessagesDTO;
__decorate([
    (0, _shared_1.IdField)(),
    __metadata("design:type", String)
], MessagesDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessagesDTO.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(() => _domains_1.SenderType),
    __metadata("design:type", typeof (_a = typeof _domains_1.SenderType !== "undefined" && _domains_1.SenderType) === "function" ? _a : Object)
], MessagesDTO.prototype, "sender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], MessagesDTO.prototype, "createdAt", void 0);
exports.MessagesDTO = MessagesDTO = __decorate([
    (0, _shared_1.ApiSchemaName)('MessagesDTO')
], MessagesDTO);
(function (MessagesDTO) {
    let Create = class Create extends (0, swagger_1.OmitType)(MessagesDTO, ['id', 'createdAt']) {
    };
    Create = __decorate([
        (0, _shared_1.ApiSchemaName)('MessagesCreateDTO')
    ], Create);
    MessagesDTO.Create = Create;
    let Update = class Update extends (0, swagger_1.PartialType)(MessagesDTO.Create) {
    };
    Update = __decorate([
        (0, _shared_1.ApiSchemaName)('MessagesUpdateDTO')
    ], Update);
    MessagesDTO.Update = Update;
})(MessagesDTO || (exports.MessagesDTO = MessagesDTO = {}));


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Messages = exports.SenderType = void 0;
const typeorm_1 = __webpack_require__(11);
const chats_1 = __webpack_require__(12);
var SenderType;
(function (SenderType) {
    SenderType["USER"] = "user";
    SenderType["SENDER"] = "sender";
})(SenderType || (exports.SenderType = SenderType = {}));
let Messages = class Messages {
};
exports.Messages = Messages;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Messages.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Messages.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: SenderType,
        default: SenderType.USER,
    }),
    __metadata("design:type", String)
], Messages.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp with time zone' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Messages.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chats_1.Chats, (chat) => chat.messages, { onDelete: 'CASCADE' }),
    __metadata("design:type", typeof (_b = typeof chats_1.Chats !== "undefined" && chats_1.Chats) === "function" ? _b : Object)
], Messages.prototype, "chat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Messages.prototype, "chatId", void 0);
exports.Messages = Messages = __decorate([
    (0, typeorm_1.Entity)('messages')
], Messages);


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesRepository = void 0;
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(11);
const messages_entities_1 = __webpack_require__(83);
let MessagesRepository = class MessagesRepository {
    constructor(messagesRepository) {
        this.messagesRepository = messagesRepository;
    }
    async getAllByChats(chatId, query) {
        const { page, limit } = query;
        const skip = (page - 1) * limit;
        const [messages, total_count] = await this.messagesRepository.findAndCount({
            where: { chatId },
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
        });
        return {
            messages: messages,
            total_count,
        };
    }
    async getAllByChatsAndSender(chatId, sender, query) {
        const { page, limit } = query;
        const skip = (page - 1) * limit;
        const [messages, total_count] = await this.messagesRepository.findAndCount({
            where: { chatId, sender },
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
        });
        return {
            messages: messages,
            total_count,
        };
    }
    async findById(id) {
        const messages = await this.messagesRepository.findOne({ where: { id } });
        if (!messages) {
            return null;
        }
        return messages;
    }
    async create(chatId, body) {
        const newMessages = this.messagesRepository.create(body);
        newMessages.chatId = chatId;
        return this.messagesRepository.save(newMessages);
    }
    async update(id, body) {
        const messages = await this.findById(id);
        const updatedMessages = Object.assign(messages, body);
        return this.messagesRepository.save(updatedMessages);
    }
    async delete(id) {
        const result = await this.messagesRepository.delete(id);
        return result.affected === 0 ? false : true;
    }
};
exports.MessagesRepository = MessagesRepository;
exports.MessagesRepository = MessagesRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(messages_entities_1.Messages)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MessagesRepository);


/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatsRepository = void 0;
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(11);
const chats_entities_1 = __webpack_require__(80);
let ChatsRepository = class ChatsRepository {
    constructor(chatsRepository) {
        this.chatsRepository = chatsRepository;
    }
    async getAllByUser(userId, query) {
        const { page, limit } = query;
        const skip = (page - 1) * limit;
        const [chats, total_count] = await this.chatsRepository.findAndCount({
            where: { userId },
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
        });
        return {
            chats: chats,
            total_count,
        };
    }
    async findById(id) {
        const chat = await this.chatsRepository.findOne({ where: { id } });
        if (!chat) {
            return null;
        }
        return chat;
    }
    async findByUser(userId) {
        return this.chatsRepository.findOne({ where: { userId } });
    }
    async create(userId, body) {
        const newChat = this.chatsRepository.create(body);
        newChat.userId = userId;
        return this.chatsRepository.save(newChat);
    }
    async update(id, body) {
        const chat = await this.findById(id);
        const updatedChat = Object.assign(chat, body);
        return this.chatsRepository.save(updatedChat);
    }
    async delete(id) {
        const result = await this.chatsRepository.delete(id);
        return result.affected === 0 ? false : true;
    }
};
exports.ChatsRepository = ChatsRepository;
exports.ChatsRepository = ChatsRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(chats_entities_1.Chats)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ChatsRepository);


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(87), exports);


/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAuthMethod = exports.UserAuthType = void 0;
const typeorm_1 = __webpack_require__(11);
const user_1 = __webpack_require__(9);
var UserAuthType;
(function (UserAuthType) {
    UserAuthType["YANDEX"] = "yandex";
    UserAuthType["VK"] = "vk";
    UserAuthType["PASSWORD"] = "password";
})(UserAuthType || (exports.UserAuthType = UserAuthType = {}));
let UserAuthMethod = class UserAuthMethod {
};
exports.UserAuthMethod = UserAuthMethod;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserAuthMethod.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: UserAuthType,
    }),
    __metadata("design:type", String)
], UserAuthMethod.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], UserAuthMethod.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.authMethods, { onDelete: 'CASCADE' }),
    __metadata("design:type", typeof (_a = typeof user_1.User !== "undefined" && user_1.User) === "function" ? _a : Object)
], UserAuthMethod.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], UserAuthMethod.prototype, "userId", void 0);
exports.UserAuthMethod = UserAuthMethod = __decorate([
    (0, typeorm_1.Entity)('user_auth_methods'),
    (0, typeorm_1.Unique)(['user', 'type'])
], UserAuthMethod);


/***/ }),
/* 88 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDTO = void 0;
const swagger_1 = __webpack_require__(14);
const _domains_1 = __webpack_require__(8);
const _shared_1 = __webpack_require__(15);
const class_validator_1 = __webpack_require__(68);
let UserDTO = class UserDTO {
    static fromModel(model) {
        return {
            id: model.id,
            name: model.name,
            email: model.email,
            gitHubId: model.gitHubId,
            theme: model.theme,
            createdAt: model.createdAt,
            lastSentAt: model.lastSentAt,
        };
    }
};
exports.UserDTO = UserDTO;
__decorate([
    (0, _shared_1.IdField)(),
    __metadata("design:type", String)
], UserDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDTO.prototype, "gitHubId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(() => _domains_1.Theme),
    __metadata("design:type", typeof (_a = typeof _domains_1.Theme !== "undefined" && _domains_1.Theme) === "function" ? _a : Object)
], UserDTO.prototype, "theme", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserDTO.prototype, "lastSentAt", void 0);
exports.UserDTO = UserDTO = __decorate([
    (0, _shared_1.ApiSchemaName)('UserDTO')
], UserDTO);
(function (UserDTO) {
    let Update = class Update extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(UserDTO, ['id', 'createdAt'])) {
    };
    Update = __decorate([
        (0, _shared_1.ApiSchemaName)('UserUpdateDTO')
    ], Update);
    UserDTO.Update = Update;
    let Register = class Register extends (0, swagger_1.PickType)(UserDTO, ['name', 'email']) {
    };
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Register.prototype, "password", void 0);
    Register = __decorate([
        (0, _shared_1.ApiSchemaName)('UserRegisterDTO')
    ], Register);
    UserDTO.Register = Register;
    let Login = class Login extends (0, swagger_1.PickType)(UserDTO, ['email']) {
    };
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Login.prototype, "password", void 0);
    Login = __decorate([
        (0, _shared_1.ApiSchemaName)('UserLoginDTO')
    ], Login);
    UserDTO.Login = Login;
})(UserDTO || (exports.UserDTO = UserDTO = {}));


/***/ }),
/* 89 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(11);
const user_entities_1 = __webpack_require__(10);
let UserRepository = class UserRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAll(query) {
        const { page, limit } = query;
        const skip = (page - 1) * limit;
        const [users, total_count] = await this.userRepository.findAndCount({
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
        });
        return {
            users: users,
            total_count,
        };
    }
    async findById(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            return null;
        }
        return user;
    }
    async update(id, body) {
        const chat = await this.findById(id);
        const updatedChat = Object.assign(chat, body);
        return this.userRepository.save(updatedChat);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(user_entities_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserRepository);


/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(91), exports);


/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthRepository = void 0;
const typeorm_1 = __webpack_require__(11);
const typeorm_2 = __webpack_require__(6);
const user_1 = __webpack_require__(9);
const user_auth_method_1 = __webpack_require__(86);
let AuthRepository = class AuthRepository {
    constructor(userRepository, authMethodRepository) {
        this.userRepository = userRepository;
        this.authMethodRepository = authMethodRepository;
    }
    async login(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            relations: ['authMethods'],
        });
        if (!user) {
            return null;
        }
        return user;
    }
    async register(body) {
        const existingUser = await this.userRepository.findOne({
            where: { email: body.email },
        });
        if (existingUser) {
            return null;
        }
        const newUser = this.userRepository.create({
            ...body,
        });
        return await this.userRepository.save(newUser);
    }
    async createAuthMethod(userId, hashedPassword) {
        const authMethod = this.authMethodRepository.create({
            type: user_auth_method_1.UserAuthType.PASSWORD,
            reference: hashedPassword,
            userId,
        });
        await this.authMethodRepository.save(authMethod);
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    __param(0, (0, typeorm_2.InjectRepository)(user_1.User)),
    __param(1, (0, typeorm_2.InjectRepository)(user_auth_method_1.UserAuthMethod)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object])
], AuthRepository);


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesService = void 0;
const _domains_1 = __webpack_require__(8);
const common_1 = __webpack_require__(4);
let MessagesService = class MessagesService {
    constructor(messagesRepository) {
        this.messagesRepository = messagesRepository;
    }
    async getAllByChats(query, params) {
        const { chatId } = params;
        const { limit, page } = query;
        const { messages, total_count } = await this.messagesRepository.getAllByChats(chatId, query);
        const total_pages = Math.ceil(total_count / limit);
        const is_last_page = page >= total_pages;
        const items_count = messages.length;
        const paginationResponse = {
            page: page,
            total_pages: total_pages,
            items_count: items_count,
            is_last_page: is_last_page,
        };
        return {
            messages: messages,
            pagination: paginationResponse,
        };
    }
    async getAllByChatsAndSender(query, params) {
        const { chatId } = params;
        const { limit, page, sender } = query;
        const { messages, total_count } = await this.messagesRepository.getAllByChatsAndSender(chatId, sender, {
            limit,
            page,
        });
        const total_pages = Math.ceil(total_count / limit);
        const is_last_page = page >= total_pages;
        const items_count = messages.length;
        const paginationResponse = {
            page: page,
            total_pages: total_pages,
            items_count: items_count,
            is_last_page: is_last_page,
        };
        return {
            messages: messages,
            pagination: paginationResponse,
        };
    }
    async findById(params) {
        const model = await this.messagesRepository.findById(params.id);
        return { message: _domains_1.MessagesDTO.fromModel(model) };
    }
    async create(params, body) {
        const model = await this.messagesRepository.create(params.chatId, body);
        return { message: _domains_1.MessagesDTO.fromModel(model) };
    }
    async update(params, body) {
        const model = await this.messagesRepository.update(params.id, body);
        return { message: _domains_1.MessagesDTO.fromModel(model) };
    }
    async delete(params) {
        const model = await this.messagesRepository.delete(params.id);
        return { deleted: model };
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _domains_1.MessagesRepository !== "undefined" && _domains_1.MessagesRepository) === "function" ? _a : Object])
], MessagesService);


/***/ }),
/* 93 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesController = void 0;
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(2);
const messages_service_1 = __webpack_require__(92);
let MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async getAllByChats(data) {
        return this.messagesService.getAllByChats(data.query, data.params);
    }
    async getAllByChatsAndSender(data) {
        return this.messagesService.getAllByChatsAndSender(data.query, data.params);
    }
    async findById(params) {
        return this.messagesService.findById(params);
    }
    async create(data) {
        return this.messagesService.create(data.params, data.body);
    }
    async update(data) {
        return this.messagesService.update(data.params, data.body);
    }
    async delete(data) {
        return this.messagesService.delete(data.params);
    }
};
exports.MessagesController = MessagesController;
__decorate([
    (0, microservices_1.MessagePattern)('messages.getAllByChats'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getAllByChats", null);
__decorate([
    (0, microservices_1.MessagePattern)('messages.getAllByChatsAndSender'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getAllByChatsAndSender", null);
__decorate([
    (0, microservices_1.MessagePattern)('messages.findById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "findById", null);
__decorate([
    (0, microservices_1.MessagePattern)('messages.create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('messages.update'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('messages.delete'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "delete", null);
exports.MessagesController = MessagesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" ? _a : Object])
], MessagesController);


/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(95), exports);
__exportStar(__webpack_require__(97), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(107), exports);


/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomainError = void 0;
class DomainError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.DomainError = DomainError;


/***/ }),
/* 97 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigSchema = exports.ConfigData = void 0;
__exportStar(__webpack_require__(98), exports);
__exportStar(__webpack_require__(99), exports);
var data_1 = __webpack_require__(106);
Object.defineProperty(exports, "ConfigData", ({ enumerable: true, get: function () { return data_1.Data; } }));
var schema_1 = __webpack_require__(105);
Object.defineProperty(exports, "ConfigSchema", ({ enumerable: true, get: function () { return schema_1.Schema; } }));


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigProvider = void 0;
const config_1 = __webpack_require__(5);
const _shared_1 = __webpack_require__(15);
const factories_1 = __webpack_require__(99);
class ConfigProvider {
    static forRoot(scopes, service) {
        return config_1.ConfigModule.forRoot({
            envFilePath: factories_1.EnvPathFactory.create(scopes, service),
            isGlobal: true,
            validate: (config) => {
                return (0, _shared_1.validateClass)(factories_1.ConfigSchemaFactory.create(scopes, service), config);
            },
        });
    }
}
exports.ConfigProvider = ConfigProvider;


/***/ }),
/* 99 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(100), exports);
__exportStar(__webpack_require__(104), exports);


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvPathFactory = void 0;
const process = __webpack_require__(101);
const path = __webpack_require__(102);
const dotenv_1 = __webpack_require__(103);
(0, dotenv_1.config)();
class EnvPathFactory {
    static env() {
        return process.env.ENVIRONMENT || 'local';
    }
    static createScopePath(scope) {
        return path.resolve(this.BASE_DIR, 'envs', this.env(), 'scopes', `${scope}.env`);
    }
    static createServicePath(service) {
        return path.resolve(this.BASE_DIR, 'envs', this.env(), 'services', `${service}.env`);
    }
    static create(scopes, service) {
        const paths = scopes.map((s) => this.createScopePath(s));
        if (service) {
            paths.push(this.createServicePath(service));
        }
        return paths;
    }
}
exports.EnvPathFactory = EnvPathFactory;
EnvPathFactory.BASE_DIR = path.resolve(process.cwd(), '.');


/***/ }),
/* 101 */
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),
/* 102 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 103 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigSchemaFactory = void 0;
const swagger_1 = __webpack_require__(14);
const schema_1 = __webpack_require__(105);
const LOG_TAG = 'ConfigSchemaFactory';
class ConfigSchemaFactory {
    static create(scopes, service) {
        const schemas = [];
        scopes.forEach((scope) => {
            const expectedSchema = schema_1.Schema.Scope.Self.find((i) => i.scope === scope);
            if (expectedSchema) {
                schemas.push(expectedSchema);
            }
            else {
                console.error(LOG_TAG + `|create Schema [scope=${scope}] was not found`);
            }
        });
        if (service) {
            const expectedSchema = schema_1.Schema.Service.Self.find((i) => i.service === service);
            if (expectedSchema) {
                schemas.push(expectedSchema);
            }
            else {
                console.error(LOG_TAG + `|create Schema [service=${service}] was not found`);
            }
        }
        return (0, swagger_1.IntersectionType)(...schemas);
    }
}
exports.ConfigSchemaFactory = ConfigSchemaFactory;


/***/ }),
/* 105 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Schema = void 0;
const class_validator_1 = __webpack_require__(68);
const data_1 = __webpack_require__(106);
const class_transformer_1 = __webpack_require__(71);
var Schema;
(function (Schema) {
    let Service;
    (function (Service) {
        class Gate {
        }
        Gate.service = data_1.Data.Service.Enum.Gate;
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], Gate.prototype, "GATE_HTTP_PORT", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Gate.prototype, "GATE_HTTP_ALLOWED_ORIGINS", void 0);
        Service.Gate = Gate;
        Service.Self = [Gate];
    })(Service = Schema.Service || (Schema.Service = {}));
    let Scope;
    (function (Scope) {
        class Database {
        }
        Database.scope = data_1.Data.Scope.Enum.Database;
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Database.prototype, "DATABASE_HOST", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], Database.prototype, "DATABASE_UI_PORT", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], Database.prototype, "DATABASE_PORT", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Database.prototype, "DATABASE_USER", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Database.prototype, "DATABASE_PASSWORD", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Database.prototype, "DATABASE_NAME", void 0);
        Scope.Database = Database;
        class S3 {
        }
        S3.scope = data_1.Data.Scope.Enum.S3;
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_USER", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_PASSWORD", void 0);
        __decorate([
            (0, class_validator_1.IsInt)(),
            (0, class_transformer_1.Type)(() => Number),
            __metadata("design:type", String)
        ], S3.prototype, "S3_PORT", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_HOST", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_BUCKET", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_REGION", void 0);
        Scope.S3 = S3;
        class JWT {
        }
        JWT.scope = data_1.Data.Scope.Enum.JWT;
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], JWT.prototype, "JWT_REFRESH_TOKEN_SECRET", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], JWT.prototype, "JWT_ACCESS_TOKEN_SECRET", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], JWT.prototype, "SALT_ROUNDS", void 0);
        Scope.JWT = JWT;
        class NATS {
        }
        NATS.scope = data_1.Data.Scope.Enum.NATS;
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], NATS.prototype, "NATS_PATH_LOCAL", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], NATS.prototype, "NATS_PATH_PROD", void 0);
        Scope.NATS = NATS;
        Scope.Self = [Database, S3, JWT, NATS];
    })(Scope = Schema.Scope || (Schema.Scope = {}));
})(Schema || (exports.Schema = Schema = {}));


/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Data = void 0;
var Data;
(function (Data) {
    let Scope;
    (function (Scope) {
        let Enum;
        (function (Enum) {
            Enum["Database"] = "database";
            Enum["S3"] = "s3";
            Enum["JWT"] = "jwt";
            Enum["NATS"] = "nats";
        })(Enum = Scope.Enum || (Scope.Enum = {}));
    })(Scope = Data.Scope || (Data.Scope = {}));
    let Service;
    (function (Service) {
        let Enum;
        (function (Enum) {
            Enum["Gate"] = "gate";
        })(Enum = Service.Enum || (Service.Enum = {}));
    })(Service = Data.Service || (Data.Service = {}));
})(Data || (exports.Data = Data = {}));


/***/ }),
/* 107 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(108), exports);


/***/ }),
/* 108 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordService = void 0;
const common_1 = __webpack_require__(4);
const config_1 = __webpack_require__(5);
const bcrypt = __webpack_require__(109);
let PasswordService = class PasswordService {
    constructor(config) {
        this.config = config;
        this.hashPassword = async (password) => {
            const saltRounds = this.config.get('SALT_ROUNDS');
            return bcrypt.hash(password, saltRounds);
        };
        this.checkPassword = async (password, hash) => {
            return bcrypt.compare(password, hash);
        };
    }
};
exports.PasswordService = PasswordService;
exports.PasswordService = PasswordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], PasswordService);
``;


/***/ }),
/* 109 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const microservices_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.NATS,
        options: {
            servers: ['nats://localhost:4222'],
            queue: 'messages_queue',
        },
    });
    await app.listen();
    console.log('Messages Microservice Messages (NATS Listener) is running...');
}
bootstrap().catch((err) => console.error(err));

})();

/******/ })()
;