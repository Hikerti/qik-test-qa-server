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
exports.UpdateAuthorizeUserContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../../libs/shared/src");
const _domains_1 = require("../../../../libs/domains/src");
const users_contract_1 = require("./users.contract");
const _systems_1 = require("../../../../libs/systems/src");
var UpdateAuthorizeUserContract;
(function (UpdateAuthorizeUserContract) {
    UpdateAuthorizeUserContract.method = _shared_1.HttpContractData.Method.Put;
    UpdateAuthorizeUserContract.path = 'authorized';
    UpdateAuthorizeUserContract.name = 'Update';
    UpdateAuthorizeUserContract.description = 'Updates authorized user';
    UpdateAuthorizeUserContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let RequestBody = class RequestBody extends _domains_1.UserDTO.Update {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateAuthorizeUserContract.name}RequestBody`)
    ], RequestBody);
    UpdateAuthorizeUserContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", _domains_1.UserDTO)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateAuthorizeUserContract.name}ResponsePayload`)
    ], ResponsePayload);
    UpdateAuthorizeUserContract.ResponsePayload = ResponsePayload;
    UpdateAuthorizeUserContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(UpdateAuthorizeUserContract || (exports.UpdateAuthorizeUserContract = UpdateAuthorizeUserContract = {}));
//# sourceMappingURL=update-user-authorized.contract.js.map