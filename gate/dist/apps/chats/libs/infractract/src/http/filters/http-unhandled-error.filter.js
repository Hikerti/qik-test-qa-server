"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpUnhandledErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const response_1 = require("../response");
const logger_1 = require("../../logger");
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
    __metadata("design:paramtypes", [logger_1.LoggerService])
], HttpUnhandledErrorFilter);
//# sourceMappingURL=http-unhandled-error.filter.js.map