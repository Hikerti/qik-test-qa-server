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

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-fastify");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@fastify/cors");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@fastify/helmet");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@fastify/multipart");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@fastify/cookie");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(2);
const _infractract_1 = __webpack_require__(12);
const _systems_1 = __webpack_require__(38);
const auth_module_1 = __webpack_require__(94);
const chats_module_1 = __webpack_require__(125);
const messages_module_1 = __webpack_require__(135);
const user_module_1 = __webpack_require__(146);
const typeorm_1 = __webpack_require__(124);
const config_1 = __webpack_require__(6);
const _domains_1 = __webpack_require__(96);
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
                    entities: [_domains_1.User, _domains_1.UserAuthMethod, _domains_1.Chats, _domains_1.Messages],
                    synchronize: true,
                }),
            }),
            _infractract_1.PasswordModule,
            _infractract_1.LoggerModule,
            _systems_1.JwtModule,
            auth_module_1.AuthModule,
            chats_module_1.ChatsModule,
            messages_module_1.MessagesModule,
            user_module_1.UserModule,
        ],
    })
], AppModule);


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
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(90), exports);


/***/ }),
/* 13 */
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
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(18), exports);


/***/ }),
/* 14 */
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
__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpResponsePackageInterceptor = void 0;
const common_1 = __webpack_require__(2);
const rxjs_1 = __webpack_require__(16);
const response_1 = __webpack_require__(17);
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
/* 16 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 17 */
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
const swagger_1 = __webpack_require__(4);
const types_1 = __webpack_require__(18);
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
/* 18 */
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
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 20 */
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
const common_1 = __webpack_require__(2);
const error_1 = __webpack_require__(21);
const response_1 = __webpack_require__(17);
const logger_1 = __webpack_require__(22);
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
/* 21 */
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerModule = void 0;
const common_1 = __webpack_require__(2);
const logger_service_1 = __webpack_require__(24);
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
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerService = void 0;
const common_1 = __webpack_require__(2);
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
/* 25 */
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
const common_1 = __webpack_require__(2);
const response_1 = __webpack_require__(17);
const logger_1 = __webpack_require__(22);
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
/* 26 */
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
const common_1 = __webpack_require__(2);
const response_1 = __webpack_require__(17);
const validation_1 = __webpack_require__(27);
const logger_1 = __webpack_require__(22);
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
/* 27 */
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
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipeOptions = void 0;
const custom_validation_error_1 = __webpack_require__(29);
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
/* 29 */
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
/* 30 */
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
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 31 */
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
exports.ConfigSchema = exports.ConfigData = void 0;
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(82), exports);
var data_1 = __webpack_require__(89);
Object.defineProperty(exports, "ConfigData", ({ enumerable: true, get: function () { return data_1.Data; } }));
var schema_1 = __webpack_require__(88);
Object.defineProperty(exports, "ConfigSchema", ({ enumerable: true, get: function () { return schema_1.Schema; } }));


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigProvider = void 0;
const config_1 = __webpack_require__(6);
const _shared_1 = __webpack_require__(34);
const factories_1 = __webpack_require__(82);
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
/* 34 */
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
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(66), exports);
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(74), exports);
__exportStar(__webpack_require__(77), exports);


/***/ }),
/* 35 */
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
__exportStar(__webpack_require__(36), exports);
var data_1 = __webpack_require__(63);
Object.defineProperty(exports, "HttpContractData", ({ enumerable: true, get: function () { return data_1.Data; } }));
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 36 */
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
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplyHttpMethodContract = void 0;
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(4);
const _systems_1 = __webpack_require__(38);
const utility_1 = __webpack_require__(62);
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


/***/ }),
/* 39 */
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
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(51), exports);
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 40 */
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
const common_1 = __webpack_require__(2);
const types_1 = __webpack_require__(41);
const resolvers_1 = __webpack_require__(44);
const http_1 = __webpack_require__(13);
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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType["Access"] = "access";
    TokenType["Refresh"] = "refresh";
})(TokenType || (exports.TokenType = TokenType = {}));


/***/ }),
/* 44 */
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
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(50), exports);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 46 */
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
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenResolver = void 0;
const jsonwebtoken_1 = __webpack_require__(48);
const base_token_resolver_1 = __webpack_require__(46);
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
/* 48 */
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenResolver = void 0;
const jsonwebtoken_1 = __webpack_require__(48);
const base_token_resolver_1 = __webpack_require__(46);
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
/* 50 */
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
const config_1 = __webpack_require__(6);
const common_1 = __webpack_require__(2);
const types_1 = __webpack_require__(41);
const access_token_resolver_1 = __webpack_require__(47);
const refresh_token_resolver_1 = __webpack_require__(49);
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
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtModule = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(6);
const jwt_service_1 = __webpack_require__(40);
const extractors_1 = __webpack_require__(52);
const resolvers_1 = __webpack_require__(44);
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
/* 52 */
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
__exportStar(__webpack_require__(53), exports);
__exportStar(__webpack_require__(54), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(57), exports);


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
exports.AccessTokenExtractor = void 0;
const common_1 = __webpack_require__(2);
const constants_1 = __webpack_require__(55);
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
/* 55 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ACCESS_TOKEN_COOKIE_NAME = exports.REFRESH_TOKEN_COOKIE_NAME = exports.REQUEST_TOKEN_PAYLOAD_FIELD = void 0;
exports.REQUEST_TOKEN_PAYLOAD_FIELD = '__tokens';
exports.REFRESH_TOKEN_COOKIE_NAME = 'refresh_token';
exports.ACCESS_TOKEN_COOKIE_NAME = 'access_token';


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenExtractor = void 0;
const common_1 = __webpack_require__(2);
const constants_1 = __webpack_require__(55);
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
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenExtractorService = void 0;
const types_1 = __webpack_require__(41);
const access_token_extractor_1 = __webpack_require__(54);
const refresh_token_extractor_1 = __webpack_require__(56);
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
/* 58 */
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
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(1);
const decorators_1 = __webpack_require__(59);
const _systems_1 = __webpack_require__(38);
const resolvers_1 = __webpack_require__(44);
const extractors_1 = __webpack_require__(52);
const http_1 = __webpack_require__(13);
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
/* 59 */
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
__exportStar(__webpack_require__(60), exports);
__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UseJWTGuard = void 0;
const core_1 = __webpack_require__(1);
exports.UseJWTGuard = core_1.Reflector.createDecorator();


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthTokenPayload = void 0;
const common_1 = __webpack_require__(2);
const _systems_1 = __webpack_require__(38);
const types_1 = __webpack_require__(41);
exports.AuthTokenPayload = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return (request?.[_systems_1.REQUEST_TOKEN_PAYLOAD_FIELD]?.[types_1.TokenType.Access] ||
        request?.[_systems_1.REQUEST_TOKEN_PAYLOAD_FIELD]?.[types_1.TokenType.Refresh]);
});


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utility = void 0;
const common_1 = __webpack_require__(2);
const data_1 = __webpack_require__(63);
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
/* 63 */
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
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplyHttpControllerContract = void 0;
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(4);
const _systems_1 = __webpack_require__(38);
const ApplyHttpControllerContract = (contract) => {
    const decorators = [(0, swagger_1.ApiTags)(contract.name), (0, common_1.Controller)(contract.path ?? ''), (0, common_1.UseGuards)(_systems_1.JwtGuard)];
    return (0, common_1.applyDecorators)(...decorators.filter(Boolean));
};
exports.ApplyHttpControllerContract = ApplyHttpControllerContract;


/***/ }),
/* 65 */
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
const swagger_1 = __webpack_require__(4);
const http_1 = __webpack_require__(13);
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
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 67 */
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
/* 68 */
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
__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdField = void 0;
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(70);
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
/* 70 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 71 */
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
__exportStar(__webpack_require__(72), exports);


/***/ }),
/* 72 */
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
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(70);
const class_transformer_1 = __webpack_require__(73);
const _shared_1 = __webpack_require__(34);
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
/* 73 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 74 */
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
__exportStar(__webpack_require__(75), exports);
__exportStar(__webpack_require__(76), exports);


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 76 */
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
/* 77 */
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
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(79), exports);
__exportStar(__webpack_require__(80), exports);
__exportStar(__webpack_require__(81), exports);


/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateClass = void 0;
const class_transformer_1 = __webpack_require__(73);
const class_validator_1 = __webpack_require__(70);
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
/* 79 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assert = assert;
function assert(value, message = 'Variable is not defined or is null') {
    if (value === null || value === undefined || value === '') {
        throw new Error(message);
    }
}


/***/ }),
/* 80 */
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
/* 81 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUTCSeconds = void 0;
const getUTCSeconds = () => Math.round(Date.now() / 1000);
exports.getUTCSeconds = getUTCSeconds;


/***/ }),
/* 82 */
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
__exportStar(__webpack_require__(83), exports);
__exportStar(__webpack_require__(87), exports);


/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvPathFactory = void 0;
const process = __webpack_require__(84);
const path = __webpack_require__(85);
const dotenv_1 = __webpack_require__(86);
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
/* 84 */
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),
/* 85 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 86 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigSchemaFactory = void 0;
const swagger_1 = __webpack_require__(4);
const schema_1 = __webpack_require__(88);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Schema = void 0;
const class_validator_1 = __webpack_require__(70);
const data_1 = __webpack_require__(89);
const class_transformer_1 = __webpack_require__(73);
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
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], JWT.prototype, "JWT_REFRESH_TOKEN_SECRET", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
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
/* 89 */
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
__exportStar(__webpack_require__(93), exports);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordService = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(6);
const bcrypt = __webpack_require__(92);
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
/* 92 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 93 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordModule = void 0;
const common_1 = __webpack_require__(2);
const password_service_1 = __webpack_require__(91);
let PasswordModule = class PasswordModule {
};
exports.PasswordModule = PasswordModule;
exports.PasswordModule = PasswordModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [password_service_1.PasswordService],
        exports: [password_service_1.PasswordService],
    })
], PasswordModule);


/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(2);
const auth_service_1 = __webpack_require__(95);
const auth_controller_1 = __webpack_require__(116);
const _domains_1 = __webpack_require__(96);
const typeorm_1 = __webpack_require__(124);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([_domains_1.User, _domains_1.Messages, _domains_1.Chats, _domains_1.UserAuthMethod])],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, _domains_1.AuthRepository],
        exports: [_domains_1.AuthRepository],
    })
], AuthModule);


/***/ }),
/* 95 */
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
exports.AuthService = void 0;
const _systems_1 = __webpack_require__(38);
const _domains_1 = __webpack_require__(96);
const http_1 = __webpack_require__(13);
const _infractract_1 = __webpack_require__(12);
const common_1 = __webpack_require__(2);
let AuthService = class AuthService {
    constructor(password, jwt, authRepository) {
        this.password = password;
        this.jwt = jwt;
        this.authRepository = authRepository;
    }
    async register(res, body) {
        const hashedPassword = await this.password.hashPassword(body.password);
        const user = await this.authRepository.register(body);
        console.log(user);
        if (!user) {
            throw new http_1.HttpError({ status: 404, code: 'user_not_found' });
        }
        await this.authRepository.createAuthMethod(user.id, hashedPassword);
        const tokens = this.jwt.signAuthTokens({ owner: { id: user.id } });
        this.enrichRequestWithTokenCookie(res, _systems_1.TokenType.Access, tokens.access);
        this.enrichRequestWithTokenCookie(res, _systems_1.TokenType.Refresh, tokens.refresh);
        return { user: _domains_1.UserDTO.fromModel(user) };
    }
    async login(res, body) {
        const user = await this.authRepository.login(body.email);
        const hashedPassword = user?.authMethods?.find((i) => i.type === 'password')?.reference;
        if (!user && !hashedPassword) {
            throw new http_1.HttpError({ status: 404, code: 'user_not_found' });
        }
        const isValidPassword = await this.password.checkPassword(body.password, hashedPassword);
        if (!isValidPassword) {
            throw new http_1.HttpError({
                status: 401,
                code: 'wrong_auth_data',
            });
        }
        const tokens = this.jwt.signAuthTokens({ owner: { id: user.id } });
        this.enrichRequestWithTokenCookie(res, _systems_1.TokenType.Access, tokens.access);
        this.enrichRequestWithTokenCookie(res, _systems_1.TokenType.Refresh, tokens.refresh);
        return { user: _domains_1.UserDTO.fromModel(user) };
    }
    async refresh(res, authPayload) {
        const tokens = this.jwt.signAuthTokens({
            owner: { id: authPayload.owner.id },
        });
        this.enrichRequestWithTokenCookie(res, _systems_1.TokenType.Access, tokens.access);
        this.enrichRequestWithTokenCookie(res, _systems_1.TokenType.Refresh, tokens.refresh);
        return {};
    }
    async logout(res) {
        this.clearRequestTokenCookie(res, _systems_1.TokenType.Access);
        this.clearRequestTokenCookie(res, _systems_1.TokenType.Refresh);
        return {};
    }
    enrichRequestWithTokenCookie(res, tokenType, tokenValue) {
        const cookieName = tokenType === _systems_1.TokenType.Refresh
            ? _systems_1.REFRESH_TOKEN_COOKIE_NAME
            : _systems_1.ACCESS_TOKEN_COOKIE_NAME;
        const maxAge = this.jwt.getMaxAge(tokenType);
        res.setCookie(cookieName, tokenValue, {
            httpOnly: true,
            secure: true,
            maxAge,
            path: '/',
        });
    }
    clearRequestTokenCookie(res, tokenType) {
        const cookieName = tokenType === _systems_1.TokenType.Refresh
            ? _systems_1.REFRESH_TOKEN_COOKIE_NAME
            : _systems_1.ACCESS_TOKEN_COOKIE_NAME;
        res.clearCookie(cookieName);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _infractract_1.PasswordService !== "undefined" && _infractract_1.PasswordService) === "function" ? _a : Object, typeof (_b = typeof _systems_1.JwtService !== "undefined" && _systems_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof _domains_1.AuthRepository !== "undefined" && _domains_1.AuthRepository) === "function" ? _c : Object])
], AuthService);


/***/ }),
/* 96 */
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
__exportStar(__webpack_require__(97), exports);
__exportStar(__webpack_require__(100), exports);
__exportStar(__webpack_require__(103), exports);
__exportStar(__webpack_require__(108), exports);
__exportStar(__webpack_require__(112), exports);
__exportStar(__webpack_require__(114), exports);


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
__exportStar(__webpack_require__(98), exports);
__exportStar(__webpack_require__(110), exports);
__exportStar(__webpack_require__(111), exports);


/***/ }),
/* 98 */
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
const typeorm_1 = __webpack_require__(99);
const chats_1 = __webpack_require__(100);
const user_auth_method_1 = __webpack_require__(108);
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
/* 99 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 100 */
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
__exportStar(__webpack_require__(101), exports);
__exportStar(__webpack_require__(102), exports);
__exportStar(__webpack_require__(107), exports);


/***/ }),
/* 101 */
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
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const class_validator_1 = __webpack_require__(70);
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
/* 102 */
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
const typeorm_1 = __webpack_require__(99);
const user_1 = __webpack_require__(97);
const messages_1 = __webpack_require__(103);
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
/* 103 */
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
__exportStar(__webpack_require__(104), exports);
__exportStar(__webpack_require__(105), exports);
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 104 */
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
const swagger_1 = __webpack_require__(4);
const _domains_1 = __webpack_require__(96);
const _shared_1 = __webpack_require__(34);
const class_validator_1 = __webpack_require__(70);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Messages = exports.SenderType = void 0;
const typeorm_1 = __webpack_require__(99);
const chats_1 = __webpack_require__(100);
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
/* 106 */
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
exports.MessagesRepository = void 0;
const typeorm_1 = __webpack_require__(99);
const messages_entities_1 = __webpack_require__(105);
const common_1 = __webpack_require__(2);
let MessagesRepository = class MessagesRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.messagesRepository = this.dataSource.getRepository(messages_entities_1.Messages);
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
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object])
], MessagesRepository);


/***/ }),
/* 107 */
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
exports.ChatsRepository = void 0;
const typeorm_1 = __webpack_require__(99);
const _domains_1 = __webpack_require__(96);
const common_1 = __webpack_require__(2);
let ChatsRepository = class ChatsRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.chatsRepository = this.dataSource.getRepository(_domains_1.Chats);
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
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object])
], ChatsRepository);


/***/ }),
/* 108 */
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
__exportStar(__webpack_require__(109), exports);


/***/ }),
/* 109 */
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
const typeorm_1 = __webpack_require__(99);
const user_1 = __webpack_require__(97);
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
/* 110 */
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
const swagger_1 = __webpack_require__(4);
const _domains_1 = __webpack_require__(96);
const _shared_1 = __webpack_require__(34);
const class_validator_1 = __webpack_require__(70);
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
/* 111 */
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
exports.UserRepository = void 0;
const typeorm_1 = __webpack_require__(99);
const user_entities_1 = __webpack_require__(98);
const common_1 = __webpack_require__(2);
let UserRepository = class UserRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.userRepository = this.dataSource.getRepository(user_entities_1.User);
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
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object])
], UserRepository);


/***/ }),
/* 112 */
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
__exportStar(__webpack_require__(113), exports);


/***/ }),
/* 113 */
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
exports.AuthRepository = void 0;
const typeorm_1 = __webpack_require__(99);
const user_1 = __webpack_require__(97);
const user_auth_method_1 = __webpack_require__(108);
const common_1 = __webpack_require__(2);
let AuthRepository = class AuthRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.userRepository = this.dataSource.getRepository(user_1.User);
        this.authMethodRepository = this.dataSource.getRepository(user_auth_method_1.UserAuthMethod);
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
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object])
], AuthRepository);


/***/ }),
/* 114 */
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
__exportStar(__webpack_require__(115), exports);


/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AiDTO = void 0;
class AiDTO {
}
exports.AiDTO = AiDTO;
(function (AiDTO) {
    class Generate {
    }
    AiDTO.Generate = Generate;
    class Push {
    }
    AiDTO.Push = Push;
})(AiDTO || (exports.AiDTO = AiDTO = {}));


/***/ }),
/* 116 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(2);
const fastify_1 = __webpack_require__(117);
const _systems_1 = __webpack_require__(38);
const auth_service_1 = __webpack_require__(95);
const contracts_1 = __webpack_require__(118);
const _shared_1 = __webpack_require__(34);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(res, body) {
        return this.authService.register(res, body);
    }
    async login(res, body) {
        return this.authService.login(res, body);
    }
    async refresh(res, authPayload) {
        return this.authService.refresh(res, authPayload);
    }
    async logout(res) {
        return this.authService.logout(res);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.RegisterContract),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof fastify_1.FastifyReply !== "undefined" && fastify_1.FastifyReply) === "function" ? _b : Object, typeof (_c = typeof contracts_1.RegisterContract !== "undefined" && contracts_1.RegisterContract.RequestBody) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "register", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.LoginContract),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof fastify_1.FastifyReply !== "undefined" && fastify_1.FastifyReply) === "function" ? _e : Object, typeof (_f = typeof contracts_1.LoginContract !== "undefined" && contracts_1.LoginContract.RequestBody) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthController.prototype, "login", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.RefreshContract),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof fastify_1.FastifyReply !== "undefined" && fastify_1.FastifyReply) === "function" ? _h : Object, typeof (_j = typeof _systems_1.AuthPayload !== "undefined" && _systems_1.AuthPayload) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.LogoutContract),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof fastify_1.FastifyReply !== "undefined" && fastify_1.FastifyReply) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, _shared_1.ApplyHttpControllerContract)(contracts_1.AuthContract),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 117 */
/***/ ((module) => {

module.exports = require("fastify");

/***/ }),
/* 118 */
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
__exportStar(__webpack_require__(119), exports);
__exportStar(__webpack_require__(120), exports);
__exportStar(__webpack_require__(121), exports);
__exportStar(__webpack_require__(122), exports);
__exportStar(__webpack_require__(123), exports);


/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthContract = void 0;
var AuthContract;
(function (AuthContract) {
    AuthContract.name = 'Auth';
    AuthContract.path = 'auth';
})(AuthContract || (exports.AuthContract = AuthContract = {}));


/***/ }),
/* 120 */
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
exports.LoginContract = void 0;
const swagger_1 = __webpack_require__(4);
const _domains_1 = __webpack_require__(96);
const auth_contract_1 = __webpack_require__(119);
const _shared_1 = __webpack_require__(34);
var LoginContract;
(function (LoginContract) {
    var _a;
    LoginContract.method = _shared_1.HttpContractData.Method.Post;
    LoginContract.path = 'login';
    LoginContract.name = 'Login';
    LoginContract.description = 'Logins user';
    let RequestBody = class RequestBody extends _domains_1.UserDTO.Login {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${LoginContract.name}RequestBody`)
    ], RequestBody);
    LoginContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.UserDTO !== "undefined" && _domains_1.UserDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${LoginContract.name}ResponsePayload`)
    ], ResponsePayload);
    LoginContract.ResponsePayload = ResponsePayload;
    LoginContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(LoginContract || (exports.LoginContract = LoginContract = {}));


/***/ }),
/* 121 */
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
exports.RegisterContract = void 0;
const swagger_1 = __webpack_require__(4);
const _domains_1 = __webpack_require__(96);
const auth_contract_1 = __webpack_require__(119);
const _shared_1 = __webpack_require__(34);
var RegisterContract;
(function (RegisterContract) {
    var _a;
    RegisterContract.method = _shared_1.HttpContractData.Method.Post;
    RegisterContract.path = 'register';
    RegisterContract.name = 'Register';
    RegisterContract.description = 'Registers user';
    let RequestBody = class RequestBody extends _domains_1.UserDTO.Register {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${RegisterContract.name}RequestBody`)
    ], RequestBody);
    RegisterContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.UserDTO !== "undefined" && _domains_1.UserDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${RegisterContract.name}ResponsePayload`)
    ], ResponsePayload);
    RegisterContract.ResponsePayload = ResponsePayload;
    RegisterContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(RegisterContract || (exports.RegisterContract = RegisterContract = {}));


/***/ }),
/* 122 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshContract = void 0;
const _shared_1 = __webpack_require__(34);
const _systems_1 = __webpack_require__(38);
const auth_contract_1 = __webpack_require__(119);
var RefreshContract;
(function (RefreshContract) {
    RefreshContract.method = _shared_1.HttpContractData.Method.Put;
    RefreshContract.path = 'refresh';
    RefreshContract.name = 'Refresh';
    RefreshContract.description = 'Refreshes user';
    RefreshContract.jwt = { [_systems_1.TokenType.Refresh]: 'required' };
    let RequestBody = class RequestBody {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${RefreshContract.name}RequestBody`)
    ], RequestBody);
    RefreshContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${RefreshContract.name}ResponsePayload`)
    ], ResponsePayload);
    RefreshContract.ResponsePayload = ResponsePayload;
    RefreshContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(RefreshContract || (exports.RefreshContract = RefreshContract = {}));


/***/ }),
/* 123 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogoutContract = void 0;
const _shared_1 = __webpack_require__(34);
const _systems_1 = __webpack_require__(38);
const auth_contract_1 = __webpack_require__(119);
var LogoutContract;
(function (LogoutContract) {
    LogoutContract.method = _shared_1.HttpContractData.Method.Delete;
    LogoutContract.path = 'logout';
    LogoutContract.name = 'Logout';
    LogoutContract.description = 'Logouts user';
    LogoutContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let RequestBody = class RequestBody {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${LogoutContract.name}RequestBody`)
    ], RequestBody);
    LogoutContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${LogoutContract.name}ResponsePayload`)
    ], ResponsePayload);
    LogoutContract.ResponsePayload = ResponsePayload;
    LogoutContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(LogoutContract || (exports.LogoutContract = LogoutContract = {}));


/***/ }),
/* 124 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 125 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatsModule = void 0;
const common_1 = __webpack_require__(2);
const chats_service_1 = __webpack_require__(126);
const chats_controller_1 = __webpack_require__(127);
const microservices_1 = __webpack_require__(5);
let ChatsModule = class ChatsModule {
};
exports.ChatsModule = ChatsModule;
exports.ChatsModule = ChatsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'CHATS_SERVICE',
                    transport: microservices_1.Transport.NATS,
                    options: { servers: ['nats://localhost:4222'] },
                },
            ]),
        ],
        providers: [chats_service_1.ChatsService],
        controllers: [chats_controller_1.ChatsController],
    })
], ChatsModule);


/***/ }),
/* 126 */
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
exports.ChatsService = void 0;
const common_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(5);
let ChatsService = class ChatsService {
    constructor(chatsClient) {
        this.chatsClient = chatsClient;
    }
    async getAllByUser(query, authPayload) {
        return this.chatsClient
            .send('chats.getAllByUser', { query, authPayload })
            .toPromise();
    }
    async findById(params) {
        return this.chatsClient.send('chats.findById', { params }).toPromise();
    }
    async create(body, authPayload) {
        return this.chatsClient
            .send('chats.create', { body, authPayload })
            .toPromise();
    }
    async update(params, body) {
        return this.chatsClient.send('chats.update', { params, body }).toPromise();
    }
    async delete(params) {
        return this.chatsClient.send('chats.delete', { params }).toPromise();
    }
};
exports.ChatsService = ChatsService;
exports.ChatsService = ChatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CHATS_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], ChatsService);


/***/ }),
/* 127 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatsController = void 0;
const common_1 = __webpack_require__(2);
const _shared_1 = __webpack_require__(34);
const chats_service_1 = __webpack_require__(126);
const _systems_1 = __webpack_require__(38);
const contracts_1 = __webpack_require__(128);
let ChatsController = class ChatsController {
    constructor(chatsService) {
        this.chatsService = chatsService;
    }
    async getAllByUser(query, authPayload) {
        return this.chatsService.getAllByUser(query, authPayload);
    }
    async findById(params) {
        return this.chatsService.findById(params);
    }
    async create(body, authPayload) {
        return this.chatsService.create(body, authPayload);
    }
    async update(params, body) {
        return this.chatsService.update(params, body);
    }
    async delete(params) {
        return this.chatsService.delete(params);
    }
};
exports.ChatsController = ChatsController;
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetAllByUserChatsContract),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof contracts_1.GetAllByUserChatsContract !== "undefined" && contracts_1.GetAllByUserChatsContract.RequestQuery) === "function" ? _b : Object, typeof (_c = typeof _systems_1.AuthPayload !== "undefined" && _systems_1.AuthPayload) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ChatsController.prototype, "getAllByUser", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.FindByIdChatContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof contracts_1.FindByIdChatContract !== "undefined" && contracts_1.FindByIdChatContract.RequestParams) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ChatsController.prototype, "findById", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.CreateChatContract),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof contracts_1.CreateChatContract !== "undefined" && contracts_1.CreateChatContract.RequestBody) === "function" ? _g : Object, typeof (_h = typeof _systems_1.AuthPayload !== "undefined" && _systems_1.AuthPayload) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ChatsController.prototype, "create", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.UpdateChatContract),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof contracts_1.UpdateChatContract !== "undefined" && contracts_1.UpdateChatContract.RequestParams) === "function" ? _k : Object, typeof (_l = typeof contracts_1.UpdateChatContract !== "undefined" && contracts_1.UpdateChatContract.RequestBody) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], ChatsController.prototype, "update", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.DeleteChatContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof contracts_1.DeleteChatContract !== "undefined" && contracts_1.DeleteChatContract.RequestParams) === "function" ? _o : Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], ChatsController.prototype, "delete", null);
exports.ChatsController = ChatsController = __decorate([
    (0, _shared_1.ApplyHttpControllerContract)(contracts_1.ChatsContract),
    __metadata("design:paramtypes", [typeof (_a = typeof chats_service_1.ChatsService !== "undefined" && chats_service_1.ChatsService) === "function" ? _a : Object])
], ChatsController);


/***/ }),
/* 128 */
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
__exportStar(__webpack_require__(129), exports);
__exportStar(__webpack_require__(130), exports);
__exportStar(__webpack_require__(131), exports);
__exportStar(__webpack_require__(132), exports);
__exportStar(__webpack_require__(133), exports);
__exportStar(__webpack_require__(134), exports);


/***/ }),
/* 129 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatsContract = void 0;
var ChatsContract;
(function (ChatsContract) {
    ChatsContract.name = 'Chats';
    ChatsContract.path = 'chats';
})(ChatsContract || (exports.ChatsContract = ChatsContract = {}));


/***/ }),
/* 130 */
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
exports.FindByIdChatContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const _domains_1 = __webpack_require__(96);
const chats_contract_1 = __webpack_require__(129);
var FindByIdChatContract;
(function (FindByIdChatContract) {
    var _a;
    FindByIdChatContract.method = _shared_1.HttpContractData.Method.Get;
    FindByIdChatContract.path = ':id';
    FindByIdChatContract.name = 'FindById';
    FindByIdChatContract.description = 'Find chat by id';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${FindByIdChatContract.name}RequestParams`)
    ], RequestParams);
    FindByIdChatContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.ChatsDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.ChatsDTO !== "undefined" && _domains_1.ChatsDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "chat", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${FindByIdChatContract.name}ResponsePayload`)
    ], ResponsePayload);
    FindByIdChatContract.ResponsePayload = ResponsePayload;
    FindByIdChatContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(FindByIdChatContract || (exports.FindByIdChatContract = FindByIdChatContract = {}));


/***/ }),
/* 131 */
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
exports.GetAllByUserChatsContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const _systems_1 = __webpack_require__(38);
const chats_contract_1 = __webpack_require__(129);
const _domains_1 = __webpack_require__(96);
var GetAllByUserChatsContract;
(function (GetAllByUserChatsContract) {
    var _a;
    GetAllByUserChatsContract.method = _shared_1.HttpContractData.Method.Get;
    GetAllByUserChatsContract.path = '/all';
    GetAllByUserChatsContract.name = 'GetAllByChat';
    GetAllByUserChatsContract.description = 'Get messages by chat';
    GetAllByUserChatsContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let RequestQuery = class RequestQuery extends _shared_1.PaginationDTO.Request {
    };
    RequestQuery = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${GetAllByUserChatsContract.name}RequestQuery`)
    ], RequestQuery);
    GetAllByUserChatsContract.RequestQuery = RequestQuery;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.ChatsDTO, isArray: true }),
        __metadata("design:type", Array)
    ], ResponsePayload.prototype, "chats", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _shared_1.PaginationDTO.Response }),
        __metadata("design:type", typeof (_a = typeof _shared_1.PaginationDTO !== "undefined" && _shared_1.PaginationDTO.Response) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "pagination", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${GetAllByUserChatsContract.name}ResponsePayload`)
    ], ResponsePayload);
    GetAllByUserChatsContract.ResponsePayload = ResponsePayload;
    GetAllByUserChatsContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(GetAllByUserChatsContract || (exports.GetAllByUserChatsContract = GetAllByUserChatsContract = {}));


/***/ }),
/* 132 */
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
exports.CreateChatContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const chats_contract_1 = __webpack_require__(129);
const _domains_1 = __webpack_require__(96);
const _systems_1 = __webpack_require__(38);
var CreateChatContract;
(function (CreateChatContract) {
    var _a;
    CreateChatContract.method = _shared_1.HttpContractData.Method.Post;
    CreateChatContract.path = '';
    CreateChatContract.name = 'Create';
    CreateChatContract.description = 'Creates chat by chat';
    CreateChatContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let RequestBody = class RequestBody extends _domains_1.ChatsDTO.Create {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${CreateChatContract.name}RequestBody`)
    ], RequestBody);
    CreateChatContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.ChatsDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.ChatsDTO !== "undefined" && _domains_1.ChatsDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "chat", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${CreateChatContract.name}ResponsePayload`)
    ], ResponsePayload);
    CreateChatContract.ResponsePayload = ResponsePayload;
    CreateChatContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(CreateChatContract || (exports.CreateChatContract = CreateChatContract = {}));


/***/ }),
/* 133 */
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
exports.UpdateChatContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const _domains_1 = __webpack_require__(96);
const chats_contract_1 = __webpack_require__(129);
var UpdateChatContract;
(function (UpdateChatContract) {
    var _a;
    UpdateChatContract.method = _shared_1.HttpContractData.Method.Put;
    UpdateChatContract.path = ':id';
    UpdateChatContract.name = 'Update';
    UpdateChatContract.description = 'Creates chat by chat';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${UpdateChatContract.name}RequestParams`)
    ], RequestParams);
    UpdateChatContract.RequestParams = RequestParams;
    let RequestBody = class RequestBody extends _domains_1.ChatsDTO.Update {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${UpdateChatContract.name}RequestBody`)
    ], RequestBody);
    UpdateChatContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.ChatsDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.ChatsDTO !== "undefined" && _domains_1.ChatsDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "chat", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${UpdateChatContract.name}ResponsePayload`)
    ], ResponsePayload);
    UpdateChatContract.ResponsePayload = ResponsePayload;
    UpdateChatContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(UpdateChatContract || (exports.UpdateChatContract = UpdateChatContract = {}));


/***/ }),
/* 134 */
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
exports.DeleteChatContract = void 0;
const _shared_1 = __webpack_require__(34);
const chats_contract_1 = __webpack_require__(129);
var DeleteChatContract;
(function (DeleteChatContract) {
    DeleteChatContract.method = _shared_1.HttpContractData.Method.Delete;
    DeleteChatContract.path = ':id';
    DeleteChatContract.name = 'Delete';
    DeleteChatContract.description = 'Deleted chat';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${DeleteChatContract.name}RequestParams`)
    ], RequestParams);
    DeleteChatContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${DeleteChatContract.name}ResponsePayload`)
    ], ResponsePayload);
    DeleteChatContract.ResponsePayload = ResponsePayload;
    DeleteChatContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(DeleteChatContract || (exports.DeleteChatContract = DeleteChatContract = {}));


/***/ }),
/* 135 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesModule = void 0;
const common_1 = __webpack_require__(2);
const messages_service_1 = __webpack_require__(136);
const messages_controller_1 = __webpack_require__(137);
const microservices_1 = __webpack_require__(5);
let MessagesModule = class MessagesModule {
};
exports.MessagesModule = MessagesModule;
exports.MessagesModule = MessagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'MESSAGES_SERVICE',
                    transport: microservices_1.Transport.NATS,
                    options: { servers: ['nats://localhost:4222'] },
                },
            ]),
        ],
        providers: [messages_service_1.MessagesService],
        controllers: [messages_controller_1.MessagesController],
    })
], MessagesModule);


/***/ }),
/* 136 */
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
exports.MessagesService = void 0;
const common_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(5);
let MessagesService = class MessagesService {
    constructor(messagesClient) {
        this.messagesClient = messagesClient;
    }
    async getAllByChats(query, params) {
        return this.messagesClient
            .send('messages.getAllByChats', { query, params })
            .toPromise();
    }
    async getAllByChatsAndSender(query, params) {
        return this.messagesClient
            .send('messages.getAllByChatsAndSender', { query, params })
            .toPromise();
    }
    async findById(params) {
        return this.messagesClient
            .send('messages.findById', { params })
            .toPromise();
    }
    async create(params, body) {
        return this.messagesClient
            .send('messages.create', { params, body })
            .toPromise();
    }
    async update(params, body) {
        return this.messagesClient
            .send('messages.update', { params, body })
            .toPromise();
    }
    async delete(params) {
        return this.messagesClient.send('messages.delete', { params }).toPromise();
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MESSAGES_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], MessagesService);


/***/ }),
/* 137 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesController = void 0;
const common_1 = __webpack_require__(2);
const _shared_1 = __webpack_require__(34);
const messages_service_1 = __webpack_require__(136);
const contracts_1 = __webpack_require__(138);
let MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async getAllByChats(query, params) {
        return this.messagesService.getAllByChats(query, params);
    }
    async getAllByChatsAndSender(query, params) {
        return this.messagesService.getAllByChatsAndSender(query, params);
    }
    async findById(params) {
        return this.messagesService.findById(params);
    }
    async create(params, body) {
        return this.messagesService.create(params, body);
    }
    async update(params, body) {
        return this.messagesService.update(params, body);
    }
    async delete(params) {
        return this.messagesService.delete(params);
    }
};
exports.MessagesController = MessagesController;
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetAllByChatMessageContract),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof contracts_1.GetAllByChatMessageContract !== "undefined" && contracts_1.GetAllByChatMessageContract.RequestQuery) === "function" ? _b : Object, typeof (_c = typeof contracts_1.GetAllByChatMessageContract !== "undefined" && contracts_1.GetAllByChatMessageContract.RequestParams) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], MessagesController.prototype, "getAllByChats", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetAllByChatAndSenderMessageContract),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof contracts_1.GetAllByChatAndSenderMessageContract !== "undefined" && contracts_1.GetAllByChatAndSenderMessageContract.RequestQuery) === "function" ? _e : Object, typeof (_f = typeof contracts_1.GetAllByChatAndSenderMessageContract !== "undefined" && contracts_1.GetAllByChatAndSenderMessageContract.RequestParams) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], MessagesController.prototype, "getAllByChatsAndSender", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.FindByIdMessageContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof contracts_1.FindByIdMessageContract !== "undefined" && contracts_1.FindByIdMessageContract.RequestParams) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], MessagesController.prototype, "findById", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.CreateMessageContract),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof contracts_1.CreateMessageContract !== "undefined" && contracts_1.CreateMessageContract.RequestParams) === "function" ? _k : Object, typeof (_l = typeof contracts_1.CreateMessageContract !== "undefined" && contracts_1.CreateMessageContract.RequestBody) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], MessagesController.prototype, "create", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.UpdateMessageContract),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof contracts_1.UpdateMessageContract !== "undefined" && contracts_1.UpdateMessageContract.RequestParams) === "function" ? _o : Object, typeof (_p = typeof contracts_1.UpdateMessageContract !== "undefined" && contracts_1.UpdateMessageContract.RequestBody) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], MessagesController.prototype, "update", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.DeleteMessageContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof contracts_1.DeleteMessageContract !== "undefined" && contracts_1.DeleteMessageContract.RequestParams) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], MessagesController.prototype, "delete", null);
exports.MessagesController = MessagesController = __decorate([
    (0, _shared_1.ApplyHttpControllerContract)(contracts_1.MessagesContract),
    __metadata("design:paramtypes", [typeof (_a = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" ? _a : Object])
], MessagesController);


/***/ }),
/* 138 */
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
__exportStar(__webpack_require__(139), exports);
__exportStar(__webpack_require__(140), exports);
__exportStar(__webpack_require__(141), exports);
__exportStar(__webpack_require__(142), exports);
__exportStar(__webpack_require__(143), exports);
__exportStar(__webpack_require__(144), exports);
__exportStar(__webpack_require__(145), exports);


/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesContract = void 0;
var MessagesContract;
(function (MessagesContract) {
    MessagesContract.name = 'Messages';
    MessagesContract.path = 'messages';
})(MessagesContract || (exports.MessagesContract = MessagesContract = {}));


/***/ }),
/* 140 */
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
exports.FindByIdMessageContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const messages_contract_1 = __webpack_require__(139);
const _domains_1 = __webpack_require__(96);
var FindByIdMessageContract;
(function (FindByIdMessageContract) {
    var _a;
    FindByIdMessageContract.method = _shared_1.HttpContractData.Method.Get;
    FindByIdMessageContract.path = ':id';
    FindByIdMessageContract.name = 'FindById';
    FindByIdMessageContract.description = 'Find message by id';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${FindByIdMessageContract.name}RequestParams`)
    ], RequestParams);
    FindByIdMessageContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.MessagesDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.MessagesDTO !== "undefined" && _domains_1.MessagesDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "message", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${FindByIdMessageContract.name}ResponsePayload`)
    ], ResponsePayload);
    FindByIdMessageContract.ResponsePayload = ResponsePayload;
    FindByIdMessageContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(FindByIdMessageContract || (exports.FindByIdMessageContract = FindByIdMessageContract = {}));


/***/ }),
/* 141 */
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
exports.GetAllByChatAndSenderMessageContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const messages_contract_1 = __webpack_require__(139);
const _domains_1 = __webpack_require__(96);
const class_validator_1 = __webpack_require__(70);
var GetAllByChatAndSenderMessageContract;
(function (GetAllByChatAndSenderMessageContract) {
    var _a, _b;
    GetAllByChatAndSenderMessageContract.method = _shared_1.HttpContractData.Method.Get;
    GetAllByChatAndSenderMessageContract.path = 'sender/:chatId/all';
    GetAllByChatAndSenderMessageContract.name = 'GetAllByChatAndSender';
    GetAllByChatAndSenderMessageContract.description = 'Get messages by chat and sender';
    let RequestQuery = class RequestQuery extends _shared_1.PaginationDTO.Request {
    };
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsEnum)(() => _domains_1.SenderType),
        __metadata("design:type", typeof (_a = typeof _domains_1.SenderType !== "undefined" && _domains_1.SenderType) === "function" ? _a : Object)
    ], RequestQuery.prototype, "sender", void 0);
    RequestQuery = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${GetAllByChatAndSenderMessageContract.name}RequestQuery`)
    ], RequestQuery);
    GetAllByChatAndSenderMessageContract.RequestQuery = RequestQuery;
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "chatId", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${GetAllByChatAndSenderMessageContract.name}RequestParams`)
    ], RequestParams);
    GetAllByChatAndSenderMessageContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.MessagesDTO, isArray: true }),
        __metadata("design:type", Array)
    ], ResponsePayload.prototype, "messages", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _shared_1.PaginationDTO.Response }),
        __metadata("design:type", typeof (_b = typeof _shared_1.PaginationDTO !== "undefined" && _shared_1.PaginationDTO.Response) === "function" ? _b : Object)
    ], ResponsePayload.prototype, "pagination", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${GetAllByChatAndSenderMessageContract.name}ResponsePayload`)
    ], ResponsePayload);
    GetAllByChatAndSenderMessageContract.ResponsePayload = ResponsePayload;
    GetAllByChatAndSenderMessageContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(GetAllByChatAndSenderMessageContract || (exports.GetAllByChatAndSenderMessageContract = GetAllByChatAndSenderMessageContract = {}));


/***/ }),
/* 142 */
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
exports.GetAllByChatMessageContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const messages_contract_1 = __webpack_require__(139);
const _domains_1 = __webpack_require__(96);
var GetAllByChatMessageContract;
(function (GetAllByChatMessageContract) {
    var _a;
    GetAllByChatMessageContract.method = _shared_1.HttpContractData.Method.Get;
    GetAllByChatMessageContract.path = ':chatId/all';
    GetAllByChatMessageContract.name = 'GetAllByChat';
    GetAllByChatMessageContract.description = 'Get messages by chat';
    let RequestQuery = class RequestQuery extends _shared_1.PaginationDTO.Request {
    };
    RequestQuery = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${GetAllByChatMessageContract.name}RequestQuery`)
    ], RequestQuery);
    GetAllByChatMessageContract.RequestQuery = RequestQuery;
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "chatId", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${GetAllByChatMessageContract.name}RequestParams`)
    ], RequestParams);
    GetAllByChatMessageContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.MessagesDTO, isArray: true }),
        __metadata("design:type", Array)
    ], ResponsePayload.prototype, "messages", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _shared_1.PaginationDTO.Response }),
        __metadata("design:type", typeof (_a = typeof _shared_1.PaginationDTO !== "undefined" && _shared_1.PaginationDTO.Response) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "pagination", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${GetAllByChatMessageContract.name}ResponsePayload`)
    ], ResponsePayload);
    GetAllByChatMessageContract.ResponsePayload = ResponsePayload;
    GetAllByChatMessageContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(GetAllByChatMessageContract || (exports.GetAllByChatMessageContract = GetAllByChatMessageContract = {}));


/***/ }),
/* 143 */
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
exports.CreateMessageContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const messages_contract_1 = __webpack_require__(139);
const _domains_1 = __webpack_require__(96);
var CreateMessageContract;
(function (CreateMessageContract) {
    var _a;
    CreateMessageContract.method = _shared_1.HttpContractData.Method.Post;
    CreateMessageContract.path = ':chatId';
    CreateMessageContract.name = 'Create';
    CreateMessageContract.description = 'Creates message by chat';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "chatId", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${CreateMessageContract.name}RequestParams`)
    ], RequestParams);
    CreateMessageContract.RequestParams = RequestParams;
    let RequestBody = class RequestBody extends _domains_1.MessagesDTO.Create {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${CreateMessageContract.name}RequestBody`)
    ], RequestBody);
    CreateMessageContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.MessagesDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.MessagesDTO !== "undefined" && _domains_1.MessagesDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "message", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${CreateMessageContract.name}ResponsePayload`)
    ], ResponsePayload);
    CreateMessageContract.ResponsePayload = ResponsePayload;
    CreateMessageContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(CreateMessageContract || (exports.CreateMessageContract = CreateMessageContract = {}));


/***/ }),
/* 144 */
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
exports.UpdateMessageContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const messages_contract_1 = __webpack_require__(139);
const _domains_1 = __webpack_require__(96);
var UpdateMessageContract;
(function (UpdateMessageContract) {
    var _a;
    UpdateMessageContract.method = _shared_1.HttpContractData.Method.Put;
    UpdateMessageContract.path = ':id';
    UpdateMessageContract.name = 'Update';
    UpdateMessageContract.description = 'Creates message by chat';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${UpdateMessageContract.name}RequestParams`)
    ], RequestParams);
    UpdateMessageContract.RequestParams = RequestParams;
    let RequestBody = class RequestBody extends _domains_1.MessagesDTO.Update {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${UpdateMessageContract.name}RequestBody`)
    ], RequestBody);
    UpdateMessageContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.MessagesDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.MessagesDTO !== "undefined" && _domains_1.MessagesDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "message", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${UpdateMessageContract.name}ResponsePayload`)
    ], ResponsePayload);
    UpdateMessageContract.ResponsePayload = ResponsePayload;
    UpdateMessageContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(UpdateMessageContract || (exports.UpdateMessageContract = UpdateMessageContract = {}));


/***/ }),
/* 145 */
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
exports.DeleteMessageContract = void 0;
const _shared_1 = __webpack_require__(34);
const messages_contract_1 = __webpack_require__(139);
var DeleteMessageContract;
(function (DeleteMessageContract) {
    DeleteMessageContract.method = _shared_1.HttpContractData.Method.Delete;
    DeleteMessageContract.path = ':id';
    DeleteMessageContract.name = 'Delete';
    DeleteMessageContract.description = 'Deleted message';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${DeleteMessageContract.name}RequestParams`)
    ], RequestParams);
    DeleteMessageContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${DeleteMessageContract.name}ResponsePayload`)
    ], ResponsePayload);
    DeleteMessageContract.ResponsePayload = ResponsePayload;
    DeleteMessageContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(DeleteMessageContract || (exports.DeleteMessageContract = DeleteMessageContract = {}));


/***/ }),
/* 146 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(2);
const user_service_1 = __webpack_require__(147);
const user_controller_1 = __webpack_require__(148);
const microservices_1 = __webpack_require__(5);
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.NATS,
                    options: { servers: ['nats://localhost:4222'] },
                },
            ]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);


/***/ }),
/* 147 */
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
exports.UserService = void 0;
const common_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(5);
let UserService = class UserService {
    constructor(userClient) {
        this.userClient = userClient;
    }
    async getList(query) {
        return this.userClient.send('users.getAll', { query }).toPromise();
    }
    async findById(params) {
        return this.userClient.send('users.findById', { params }).toPromise();
    }
    async findAuthorized(auth) {
        return this.userClient.send('users.findAuthorize', { auth }).toPromise();
    }
    async updateById(params, body) {
        return this.userClient
            .send('users.updateById', { params, body })
            .toPromise();
    }
    async updateAuthorized(auth, body) {
        return this.userClient
            .send('users.updateAuthorized', { auth, body })
            .toPromise();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserService);


/***/ }),
/* 148 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(2);
const _shared_1 = __webpack_require__(34);
const _systems_1 = __webpack_require__(38);
const user_service_1 = __webpack_require__(147);
const contracts_1 = __webpack_require__(149);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getList(query) {
        return this.userService.getList(query);
    }
    async findById(params) {
        return this.userService.findById(params);
    }
    async findAuthorized(auth) {
        return this.userService.findAuthorized(auth);
    }
    async updateById(params, body) {
        return this.userService.updateById(params, body);
    }
    async updateAuthorized(body, auth) {
        return this.userService.updateAuthorized(auth, body);
    }
};
exports.UserController = UserController;
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetUsersListContract),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof contracts_1.GetUsersListContract !== "undefined" && contracts_1.GetUsersListContract.RequestQuery) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "getList", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.FindUserContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof contracts_1.FindUserContract !== "undefined" && contracts_1.FindUserContract.RequestParams) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserController.prototype, "findById", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetAuthorizedUserContract),
    __param(0, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof _systems_1.AuthPayload !== "undefined" && _systems_1.AuthPayload) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UserController.prototype, "findAuthorized", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.UpdateUserContract),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof contracts_1.UpdateUserContract !== "undefined" && contracts_1.UpdateUserContract.RequestParams) === "function" ? _h : Object, typeof (_j = typeof contracts_1.UpdateUserContract !== "undefined" && contracts_1.UpdateUserContract.RequestBody) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], UserController.prototype, "updateById", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.UpdateAuthorizeUserContract),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof contracts_1.UpdateAuthorizeUserContract !== "undefined" && contracts_1.UpdateAuthorizeUserContract.RequestBody) === "function" ? _l : Object, typeof (_m = typeof _systems_1.AuthPayload !== "undefined" && _systems_1.AuthPayload) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], UserController.prototype, "updateAuthorized", null);
exports.UserController = UserController = __decorate([
    (0, _shared_1.ApplyHttpControllerContract)(contracts_1.UsersContract),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 149 */
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
__exportStar(__webpack_require__(150), exports);
__exportStar(__webpack_require__(151), exports);
__exportStar(__webpack_require__(152), exports);
__exportStar(__webpack_require__(153), exports);
__exportStar(__webpack_require__(154), exports);
__exportStar(__webpack_require__(155), exports);


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersContract = void 0;
var UsersContract;
(function (UsersContract) {
    UsersContract.name = 'Users';
    UsersContract.path = 'users';
})(UsersContract || (exports.UsersContract = UsersContract = {}));


/***/ }),
/* 151 */
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
exports.GetUsersListContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const _domains_1 = __webpack_require__(96);
const users_contract_1 = __webpack_require__(150);
var GetUsersListContract;
(function (GetUsersListContract) {
    var _a;
    GetUsersListContract.method = _shared_1.HttpContractData.Method.Get;
    GetUsersListContract.path = '/all';
    GetUsersListContract.name = 'GetList';
    GetUsersListContract.description = 'Returns list of users';
    let RequestQuery = class RequestQuery extends _shared_1.PaginationDTO.Request {
    };
    RequestQuery = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${GetUsersListContract.name}RequestQuery`)
    ], RequestQuery);
    GetUsersListContract.RequestQuery = RequestQuery;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO, isArray: true }),
        __metadata("design:type", Array)
    ], ResponsePayload.prototype, "users", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _shared_1.PaginationDTO.Response }),
        __metadata("design:type", typeof (_a = typeof _shared_1.PaginationDTO !== "undefined" && _shared_1.PaginationDTO.Response) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "pagination", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${GetUsersListContract.name}ResponsePayload`)
    ], ResponsePayload);
    GetUsersListContract.ResponsePayload = ResponsePayload;
    GetUsersListContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(GetUsersListContract || (exports.GetUsersListContract = GetUsersListContract = {}));


/***/ }),
/* 152 */
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
exports.FindUserContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const _domains_1 = __webpack_require__(96);
const users_contract_1 = __webpack_require__(150);
var FindUserContract;
(function (FindUserContract) {
    var _a;
    FindUserContract.method = _shared_1.HttpContractData.Method.Get;
    FindUserContract.path = ':userId';
    FindUserContract.name = 'FindOne';
    FindUserContract.description = 'Finds user by id';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "userId", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${FindUserContract.name}RequestParams`)
    ], RequestParams);
    FindUserContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.UserDTO !== "undefined" && _domains_1.UserDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${FindUserContract.name}ResponsePayload`)
    ], ResponsePayload);
    FindUserContract.ResponsePayload = ResponsePayload;
    FindUserContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(FindUserContract || (exports.FindUserContract = FindUserContract = {}));


/***/ }),
/* 153 */
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
exports.GetAuthorizedUserContract = void 0;
const swagger_1 = __webpack_require__(4);
const _systems_1 = __webpack_require__(38);
const _domains_1 = __webpack_require__(96);
const _shared_1 = __webpack_require__(34);
const users_contract_1 = __webpack_require__(150);
var GetAuthorizedUserContract;
(function (GetAuthorizedUserContract) {
    var _a;
    GetAuthorizedUserContract.method = _shared_1.HttpContractData.Method.Get;
    GetAuthorizedUserContract.path = 'authorized';
    GetAuthorizedUserContract.name = 'GetAuthorized';
    GetAuthorizedUserContract.description = 'Returns authorized user';
    GetAuthorizedUserContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.UserDTO !== "undefined" && _domains_1.UserDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${GetAuthorizedUserContract.name}ResponsePayload`)
    ], ResponsePayload);
    GetAuthorizedUserContract.ResponsePayload = ResponsePayload;
    GetAuthorizedUserContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(GetAuthorizedUserContract || (exports.GetAuthorizedUserContract = GetAuthorizedUserContract = {}));


/***/ }),
/* 154 */
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
exports.UpdateUserContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const _domains_1 = __webpack_require__(96);
const users_contract_1 = __webpack_require__(150);
const _systems_1 = __webpack_require__(38);
var UpdateUserContract;
(function (UpdateUserContract) {
    var _a;
    UpdateUserContract.method = _shared_1.HttpContractData.Method.Patch;
    UpdateUserContract.path = ':userId';
    UpdateUserContract.name = 'Update';
    UpdateUserContract.description = 'Updates authorized user';
    UpdateUserContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "userId", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateUserContract.name}RequestParams`)
    ], RequestParams);
    UpdateUserContract.RequestParams = RequestParams;
    let RequestBody = class RequestBody extends _domains_1.UserDTO.Update {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateUserContract.name}RequestBody`)
    ], RequestBody);
    UpdateUserContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.UserDTO !== "undefined" && _domains_1.UserDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateUserContract.name}ResponsePayload`)
    ], ResponsePayload);
    UpdateUserContract.ResponsePayload = ResponsePayload;
    UpdateUserContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(UpdateUserContract || (exports.UpdateUserContract = UpdateUserContract = {}));


/***/ }),
/* 155 */
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
exports.UpdateAuthorizeUserContract = void 0;
const swagger_1 = __webpack_require__(4);
const _shared_1 = __webpack_require__(34);
const _domains_1 = __webpack_require__(96);
const users_contract_1 = __webpack_require__(150);
const _systems_1 = __webpack_require__(38);
var UpdateAuthorizeUserContract;
(function (UpdateAuthorizeUserContract) {
    var _a;
    UpdateAuthorizeUserContract.method = _shared_1.HttpContractData.Method.Put;
    UpdateAuthorizeUserContract.path = 'authorized';
    UpdateAuthorizeUserContract.name = 'Update';
    UpdateAuthorizeUserContract.description = 'Updates authorized user';
    UpdateAuthorizeUserContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let RequestBody = class RequestBody extends _domains_1.UserDTO.Update {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateAuthorizeUserContract.name}RequestBody`)
    ], RequestBody);
    UpdateAuthorizeUserContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", typeof (_a = typeof _domains_1.UserDTO !== "undefined" && _domains_1.UserDTO) === "function" ? _a : Object)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateAuthorizeUserContract.name}ResponsePayload`)
    ], ResponsePayload);
    UpdateAuthorizeUserContract.ResponsePayload = ResponsePayload;
    UpdateAuthorizeUserContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(UpdateAuthorizeUserContract || (exports.UpdateAuthorizeUserContract = UpdateAuthorizeUserContract = {}));


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
const common_1 = __webpack_require__(2);
const platform_fastify_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
const cors_1 = __webpack_require__(7);
const helmet_1 = __webpack_require__(8);
const multipart_1 = __webpack_require__(9);
const cookie_1 = __webpack_require__(10);
const app_module_1 = __webpack_require__(11);
const logger_1 = __webpack_require__(22);
const validation_1 = __webpack_require__(27);
const http_1 = __webpack_require__(13);
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
            servers: ['nats://nats:4222'],
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

})();

/******/ })()
;