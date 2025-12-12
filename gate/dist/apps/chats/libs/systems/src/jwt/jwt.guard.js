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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const decorators_1 = require("./decorators");
const _systems_1 = require("..");
const resolvers_1 = require("./resolvers");
const extractors_1 = require("./extractors");
const http_1 = require("../../../infractract/src/http");
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
    __metadata("design:paramtypes", [core_1.Reflector,
        extractors_1.TokenExtractorService,
        resolvers_1.TokenResolverService])
], JwtGuard);
//# sourceMappingURL=jwt.guard.js.map