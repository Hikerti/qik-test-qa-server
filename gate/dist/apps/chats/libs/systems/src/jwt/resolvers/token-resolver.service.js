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
exports.TokenResolverService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const types_1 = require("../types");
const access_token_resolver_1 = require("./access-token.resolver");
const refresh_token_resolver_1 = require("./refresh-token.resolver");
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
    __metadata("design:paramtypes", [config_1.ConfigService])
], TokenResolverService);
//# sourceMappingURL=token-resolver.service.js.map