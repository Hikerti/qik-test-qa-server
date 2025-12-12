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
exports.GetAllByChatMessageContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../../libs/shared/src");
const messages_contract_1 = require("./messages.contract");
const _domains_1 = require("../../../../libs/domains/src");
var GetAllByChatMessageContract;
(function (GetAllByChatMessageContract) {
    GetAllByChatMessageContract.method = _shared_1.HttpContractData.Method.Get;
    GetAllByChatMessageContract.path = ':chatId/all';
    GetAllByChatMessageContract.name = 'GetAllByChat';
    GetAllByChatMessageContract.description = 'Get messages by chat';
    let RequestQuery = class RequestQuery extends _shared_1.PaginationDTO.Request {
    };
    RequestQuery = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${GetAllByChatMessageContract.name}RequestQuery`)
    ], RequestQuery);
    GetAllByChatMessageContract.RequestQuery = RequestQuery;
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "chatId", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${GetAllByChatMessageContract.name}RequestParams`)
    ], RequestParams);
    GetAllByChatMessageContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.MessagesDTO, isArray: true }),
        __metadata("design:type", Array)
    ], ResponsePayload.prototype, "messages", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _shared_1.PaginationDTO.Response }),
        __metadata("design:type", _shared_1.PaginationDTO.Response)
    ], ResponsePayload.prototype, "pagination", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${GetAllByChatMessageContract.name}ResponsePayload`)
    ], ResponsePayload);
    GetAllByChatMessageContract.ResponsePayload = ResponsePayload;
    GetAllByChatMessageContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(GetAllByChatMessageContract || (exports.GetAllByChatMessageContract = GetAllByChatMessageContract = {}));
//# sourceMappingURL=get-all-by-chats-message.contract.js.map