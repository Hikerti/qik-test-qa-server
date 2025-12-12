"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenExtractorService = void 0;
const types_1 = require("../types");
const access_token_extractor_1 = require("./access-token.extractor");
const refresh_token_extractor_1 = require("./refresh-token.extractor");
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
//# sourceMappingURL=token-extractor.service.js.map