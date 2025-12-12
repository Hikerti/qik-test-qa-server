"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenResolver = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const base_token_resolver_1 = require("./base-token.resolver");
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
//# sourceMappingURL=refresh-token.resolver.js.map