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
exports.CreateMessageContract = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../../libs/shared/src");
const messages_contract_1 = require("./messages.contract");
const _domains_1 = require("../../../../libs/domains/src");
var CreateMessageContract;
(function (CreateMessageContract) {
    CreateMessageContract.method = _shared_1.HttpContractData.Method.Post;
    CreateMessageContract.path = ':chatId';
    CreateMessageContract.name = 'Create';
    CreateMessageContract.description = 'Creates message by chat';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "chatId", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${CreateMessageContract.name}RequestParams`)
    ], RequestParams);
    CreateMessageContract.RequestParams = RequestParams;
    let RequestBody = class RequestBody extends _domains_1.MessagesDTO.Create {
    };
    RequestBody = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${CreateMessageContract.name}RequestBody`)
    ], RequestBody);
    CreateMessageContract.RequestBody = RequestBody;
    let ResponsePayload = class ResponsePayload {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: _domains_1.MessagesDTO }),
        __metadata("design:type", _domains_1.MessagesDTO)
    ], ResponsePayload.prototype, "message", void 0);
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${CreateMessageContract.name}ResponsePayload`)
    ], ResponsePayload);
    CreateMessageContract.ResponsePayload = ResponsePayload;
    CreateMessageContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(CreateMessageContract || (exports.CreateMessageContract = CreateMessageContract = {}));
//# sourceMappingURL=create-messages.contract.js.map