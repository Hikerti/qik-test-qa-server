"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshContract = void 0;
const _shared_1 = require("../../../../libs/shared/src");
const _systems_1 = require("../../../../libs/systems/src");
const auth_contract_1 = require("./auth.contract");
var RefreshContract;
(function (RefreshContract) {
    RefreshContract.method = _shared_1.HttpContractData.Method.Put;
    RefreshContract.path = 'refresh';
    RefreshContract.name = 'Refresh';
    RefreshContract.description = 'Refreshes user';
    RefreshContract.jwt = { [_systems_1.TokenType.Refresh]: 'required' };
    let RequestBody = class RequestBody {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${RefreshContract.name}RequestBody`)
    ], RequestBody);
    RefreshContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${auth_contract_1.AuthContract.name}${RefreshContract.name}ResponsePayload`)
    ], ResponsePayload);
    RefreshContract.ResponsePayload = ResponsePayload;
    RefreshContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(RefreshContract || (exports.RefreshContract = RefreshContract = {}));
//# sourceMappingURL=refresh.contract.js.map