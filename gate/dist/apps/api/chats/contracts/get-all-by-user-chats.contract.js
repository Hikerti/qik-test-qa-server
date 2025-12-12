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
exports.GetAllByUserChatsContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../../libs/shared/src");
const _systems_1 = require("../../../../libs/systems/src");
const chats_contract_1 = require("./chats.contract");
const _domains_1 = require("../../../../libs/domains/src");
var GetAllByUserChatsContract;
(function (GetAllByUserChatsContract) {
    GetAllByUserChatsContract.method = _shared_1.HttpContractData.Method.Get;
    GetAllByUserChatsContract.path = '/all';
    GetAllByUserChatsContract.name = 'GetAllByChat';
    GetAllByUserChatsContract.description = 'Get messages by chat';
    GetAllByUserChatsContract.jwt = { [_systems_1.TokenType.Access]: 'required' };
    let RequestQuery = class RequestQuery extends _shared_1.PaginationDTO.Request {
    };
    RequestQuery = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${GetAllByUserChatsContract.name}RequestQuery`)
    ], RequestQuery);
    GetAllByUserChatsContract.RequestQuery = RequestQuery;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.ChatsDTO, isArray: true }),
        __metadata("design:type", Array)
    ], ResponsePayload.prototype, "chats", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _shared_1.PaginationDTO.Response }),
        __metadata("design:type", _shared_1.PaginationDTO.Response)
    ], ResponsePayload.prototype, "pagination", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${GetAllByUserChatsContract.name}ResponsePayload`)
    ], ResponsePayload);
    GetAllByUserChatsContract.ResponsePayload = ResponsePayload;
    GetAllByUserChatsContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(GetAllByUserChatsContract || (exports.GetAllByUserChatsContract = GetAllByUserChatsContract = {}));
//# sourceMappingURL=get-all-by-user-chats.contract.js.map