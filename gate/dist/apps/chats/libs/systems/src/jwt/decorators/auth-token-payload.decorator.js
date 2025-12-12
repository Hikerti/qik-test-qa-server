"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenPayload = void 0;
const common_1 = require("@nestjs/common");
const _systems_1 = require("../..");
const types_1 = require("../types");
exports.AuthTokenPayload = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return (request?.[_systems_1.REQUEST_TOKEN_PAYLOAD_FIELD]?.[types_1.TokenType.Access] ||
        request?.[_systems_1.REQUEST_TOKEN_PAYLOAD_FIELD]?.[types_1.TokenType.Refresh]);
});
//# sourceMappingURL=auth-token-payload.decorator.js.map