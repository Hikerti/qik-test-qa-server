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
exports.LoginContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _domains_1 = require("../../../../libs/domains/src");
const auth_contract_1 = require("./auth.contract");
const _shared_1 = require("../../../../libs/shared/src");
var LoginContract;
(function (LoginContract) {
    LoginContract.method = _shared_1.HttpContractData.Method.Post;
    LoginContract.path = 'login';
    LoginContract.name = 'Login';
    LoginContract.description = 'Logins user';
    let RequestBody = class RequestBody extends _domains_1.UserDTO.Login {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${LoginContract.name}RequestBody`)
    ], RequestBody);
    LoginContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", _domains_1.UserDTO)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${LoginContract.name}ResponsePayload`)
    ], ResponsePayload);
    LoginContract.ResponsePayload = ResponsePayload;
    LoginContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(LoginContract || (exports.LoginContract = LoginContract = {}));
//# sourceMappingURL=login.contract.js.map