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
exports.GetUsersListContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../../libs/shared/src");
const _domains_1 = require("../../../../libs/domains/src");
const users_contract_1 = require("./users.contract");
var GetUsersListContract;
(function (GetUsersListContract) {
    GetUsersListContract.method = _shared_1.HttpContractData.Method.Get;
    GetUsersListContract.path = '/all';
    GetUsersListContract.name = 'GetList';
    GetUsersListContract.description = 'Returns list of users';
    let RequestQuery = class RequestQuery extends _shared_1.PaginationDTO.Request {
    };
    RequestQuery = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${GetUsersListContract.name}RequestQuery`)
    ], RequestQuery);
    GetUsersListContract.RequestQuery = RequestQuery;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.UserDTO, isArray: true }),
        __metadata("design:type", Array)
    ], ResponsePayload.prototype, "users", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _shared_1.PaginationDTO.Response }),
        __metadata("design:type", _shared_1.PaginationDTO.Response)
    ], ResponsePayload.prototype, "pagination", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${users_contract_1.UsersContract.name}${GetUsersListContract.name}ResponsePayload`)
    ], ResponsePayload);
    GetUsersListContract.ResponsePayload = ResponsePayload;
    GetUsersListContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(GetUsersListContract || (exports.GetUsersListContract = GetUsersListContract = {}));
//# sourceMappingURL=get-users-list.contract.js.map