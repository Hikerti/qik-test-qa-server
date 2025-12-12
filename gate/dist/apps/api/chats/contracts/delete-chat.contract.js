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
exports.DeleteChatContract = void 0;
const _shared_1 = require("../../../../libs/shared/src");
const chats_contract_1 = require("./chats.contract");
var DeleteChatContract;
(function (DeleteChatContract) {
    DeleteChatContract.method = _shared_1.HttpContractData.Method.Delete;
    DeleteChatContract.path = ':id';
    DeleteChatContract.name = 'Delete';
    DeleteChatContract.description = 'Deleted chat';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${DeleteChatContract.name}RequestParams`)
    ], RequestParams);
    DeleteChatContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${DeleteChatContract.name}ResponsePayload`)
    ], ResponsePayload);
    DeleteChatContract.ResponsePayload = ResponsePayload;
    DeleteChatContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(DeleteChatContract || (exports.DeleteChatContract = DeleteChatContract = {}));
//# sourceMappingURL=delete-chat.contract.js.map