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
exports.UpdateUserContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../../libs/shared/src");
const _domains_1 = require("../../../../libs/domains/src");
const users_contract_1 = require("./users.contract");
const _systems_1 = require("../../../../libs/systems/src");
var UpdateUserContract;
(function (UpdateUserContract) {
    UpdateUserContract.method = _shared_1.HttpContractData.Method.Patch;
    UpdateUserContract.path = ':userId';
    UpdateUserContract.name = 'Update';
    UpdateUserContract.description = 'Updates authorized user';
    UpdateUserContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "userId", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateUserContract.name}RequestParams`)
    ], RequestParams);
    UpdateUserContract.RequestParams = RequestParams;
    let RequestBody = class RequestBody extends _domains_1.UserDTO.Update {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateUserContract.name}RequestBody`)
    ], RequestBody);
    UpdateUserContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO }),
        __metadata("design:type", _domains_1.UserDTO)
    ], ResponsePayload.prototype, "user", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${UpdateUserContract.name}ResponsePayload`)
    ], ResponsePayload);
    UpdateUserContract.ResponsePayload = ResponsePayload;
    UpdateUserContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(UpdateUserContract || (exports.UpdateUserContract = UpdateUserContract = {}));
//# sourceMappingURL=update-user.contract.js.map