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
exports.FindByIdChatContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../../libs/shared/src");
const _domains_1 = require("../../../../libs/domains/src");
const chats_contract_1 = require("./chats.contract");
var FindByIdChatContract;
(function (FindByIdChatContract) {
    FindByIdChatContract.method = _shared_1.HttpContractData.Method.Get;
    FindByIdChatContract.path = ':id';
    FindByIdChatContract.name = 'FindById';
    FindByIdChatContract.description = 'Find chat by id';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${FindByIdChatContract.name}RequestParams`)
    ], RequestParams);
    FindByIdChatContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.ChatsDTO }),
        __metadata("design:type", _domains_1.ChatsDTO)
    ], ResponsePayload.prototype, "chat", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${chats_contract_1.ChatsContract.name}${FindByIdChatContract.name}ResponsePayload`)
    ], ResponsePayload);
    FindByIdChatContract.ResponsePayload = ResponsePayload;
    FindByIdChatContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(FindByIdChatContract || (exports.FindByIdChatContract = FindByIdChatContract = {}));
//# sourceMappingURL=find-by-id-chat.contract.js.map