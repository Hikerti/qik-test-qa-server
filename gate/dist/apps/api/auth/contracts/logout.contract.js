"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutContract = void 0;
const _shared_1 = require("../../../../libs/shared/src");
const _systems_1 = require("../../../../libs/systems/src");
const auth_contract_1 = require("./auth.contract");
var LogoutContract;
(function (LogoutContract) {
    LogoutContract.method = _shared_1.HttpContractData.Method.Delete;
    LogoutContract.path = 'logout';
    LogoutContract.name = 'Logout';
    LogoutContract.description = 'Logouts user';
    LogoutContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let RequestBody = class RequestBody {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${LogoutContract.name}RequestBody`)
    ], RequestBody);
    LogoutContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${LogoutContract.name}ResponsePayload`)
    ], ResponsePayload);
    LogoutContract.ResponsePayload = ResponsePayload;
    LogoutContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(LogoutContract || (exports.LogoutContract = LogoutContract = {}));
//# sourceMappingURL=logout.contract.js.map