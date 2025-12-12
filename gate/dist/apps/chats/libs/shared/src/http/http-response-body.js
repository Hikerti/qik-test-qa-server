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
exports.HttpResponseBody = void 0;
const swagger_1 = require("@nestjs/swagger");
const http_1 = require("../../../infractract/src/http");
const HttpResponseBody = (responsePayload) => {
    const payloadName = responsePayload.name;
    const responseName = payloadName.replace(/ResponsePayload$/, 'ResponseBody') || `${payloadName}ResponseBody`;
    class HttpResponseBody extends http_1.HttpResponse {
        constructor(response) {
            super({ code: response.code, message: response.message });
            this.payload = responsePayload;
        }
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ type: responsePayload }),
        __metadata("design:type", Object)
    ], HttpResponseBody.prototype, "payload", void 0);
    Object.defineProperty(HttpResponseBody, 'name', {
        value: responseName,
    });
    return HttpResponseBody;
};
exports.HttpResponseBody = HttpResponseBody;
//# sourceMappingURL=http-response-body.js.map