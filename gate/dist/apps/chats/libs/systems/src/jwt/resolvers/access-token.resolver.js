"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenResolver = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const base_token_resolver_1 = require("./base-token.resolver");
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
//# sourceMappingURL=access-token.resolver.js.map