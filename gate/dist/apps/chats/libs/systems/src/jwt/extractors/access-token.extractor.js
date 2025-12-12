"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenExtractor = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
let AccessTokenExtractor = class AccessTokenExtractor {
    extract(request) {
        return request?.cookies?.[constants_1.ACCESS_TOKEN_COOKIE_NAME] ?? null;
    }
};
exports.AccessTokenExtractor = AccessTokenExtractor;
exports.AccessTokenExtractor = AccessTokenExtractor = __decorate([
    (0, common_1.Injectable)()
], AccessTokenExtractor);
//# sourceMappingURL=access-token.extractor.js.map