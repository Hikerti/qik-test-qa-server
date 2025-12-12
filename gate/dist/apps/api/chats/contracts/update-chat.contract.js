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
exports.UpdateChatContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../../libs/shared/src");
const _domains_1 = require("../../../../libs/domains/src");
const chats_contract_1 = require("./chats.contract");
var UpdateChatContract;
(function (UpdateChatContract) {
    UpdateChatContract.method = _shared_1.HttpContractData.Method.Put;
    UpdateChatContract.path = ':id';
    UpdateChatContract.name = 'Update';
    UpdateChatContract.description = 'Creates chat by chat';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${UpdateChatContract.name}RequestParams`)
    ], RequestParams);
    UpdateChatContract.RequestParams = RequestParams;
    let RequestBody = class RequestBody extends _domains_1.ChatsDTO.Update {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${UpdateChatContract.name}RequestBody`)
    ], RequestBody);
    UpdateChatContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.ChatsDTO }),
        __metadata("design:type", _domains_1.ChatsDTO)
    ], ResponsePayload.prototype, "chat", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${UpdateChatContract.name}ResponsePayload`)
    ], ResponsePayload);
    UpdateChatContract.ResponsePayload = ResponsePayload;
    UpdateChatContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(UpdateChatContract || (exports.UpdateChatContract = UpdateChatContract = {}));
//# sourceMappingURL=update-chat.contract.js.map