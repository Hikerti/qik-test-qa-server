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
exports.DeleteMessageContract = void 0;
const _shared_1 = require("../../../../libs/shared/src");
const messages_contract_1 = require("./messages.contract");
var DeleteMessageContract;
(function (DeleteMessageContract) {
    DeleteMessageContract.method = _shared_1.HttpContractData.Method.Delete;
    DeleteMessageContract.path = ':id';
    DeleteMessageContract.name = 'Delete';
    DeleteMessageContract.description = 'Deleted message';
    let RequestParams = class RequestParams {
    };
    __decorate([
        (0, _shared_1.IdField)(),
        __metadata("design:type", String)
    ], RequestParams.prototype, "id", void 0);
    RequestParams = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${DeleteMessageContract.name}RequestParams`)
    ], RequestParams);
    DeleteMessageContract.RequestParams = RequestParams;
    let ResponsePayload = class ResponsePayload {
    };
    ResponsePayload = __decorate([
        (0, _shared_1.ApiSchemaName)(`${messages_contract_1.MessagesContract.name}${DeleteMessageContract.name}ResponsePayload`)
    ], ResponsePayload);
    DeleteMessageContract.ResponsePayload = ResponsePayload;
    DeleteMessageContract.ResponseBody = (0, _shared_1.HttpResponseBody)(ResponsePayload);
})(DeleteMessageContract || (exports.DeleteMessageContract = DeleteMessageContract = {}));
//# sourceMappingURL=delete-message.contract.js.map