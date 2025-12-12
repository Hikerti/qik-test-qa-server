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
exports.JwtService = void 0;
const common_1 = require("@nestjs/common");
const types_1 = require("./types");
const resolvers_1 = require("./resolvers");
const http_1 = require("../../../infractract/src/http");
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
    __metadata("design:paramtypes", [resolvers_1.TokenResolverService])
], JwtService);
//# sourceMappingURL=jwt.service.js.map