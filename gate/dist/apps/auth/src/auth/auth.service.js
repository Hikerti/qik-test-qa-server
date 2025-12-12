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
exports.AuthService = void 0;
const _systems_1 = require("../../../../libs/systems/src");
const _domains_1 = require("../../../../libs/domains/src");
const _infractract_1 = require("../../../../libs/infractract/src");
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(password, jwt, authRepository) {
        this.password = password;
        this.jwt = jwt;
        this.authRepository = authRepository;
    }
    async register(res, body) {
        const hashedPassword = await this.password.hashPassword(body.password);
        const user = await this.authRepository.register(body);
        if (!user) {
            throw new _infractract_1.HttpError({ status: 404, code: 'user_not_found' });
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
            throw new _infractract_1.HttpError({ status: 404, code: 'user_not_found' });
        }
        const isValidPassword = await this.password.checkPassword(body.password, hashedPassword);
        if (!isValidPassword) {
            throw new _infractract_1.HttpError({
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
    __metadata("design:paramtypes", [_infractract_1.PasswordService,
        _systems_1.JwtService,
        _domains_1.AuthRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map