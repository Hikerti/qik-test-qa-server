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
exports.GetAuthorizedUserContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _systems_1 = require("../../../../libs/systems/src");
const _domains_1 = require("../../../../libs/domains/src");
const _shared_1 = require("../../../../libs/shared/src");
const users_contract_1 = require("./users.contract");
var GetAuthorizedUserContract;
(function (GetAuthorizedUserContract) {
    GetAuthorizedUserContract.method = _shared_1.HttpContractData.Method.Get;
    GetAuthorizedUserContract.path = 'authorized';
    GetAuthorizedUserContract.name = 'GetAuthorized';
    GetAuthorizedUserContract.description = 'Returns authorized user';
    GetAuthorizedUserContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", _domains_1.UserDTO)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${GetAuthorizedUserContract.name}ResponsePayload`)
    ], ResponsePayload);
    GetAuthorizedUserContract.ResponsePayload = ResponsePayload;
    GetAuthorizedUserContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(GetAuthorizedUserContract || (exports.GetAuthorizedUserContract = GetAuthorizedUserContract = {}));
//# sourceMappingURL=get-authorized-user.contract.js.map