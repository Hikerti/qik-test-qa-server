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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../libs/shared/src");
const messages_service_1 = require("./messages.service");
const contracts_1 = require("./contracts");
let MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async getAllByChats(query, params) {
        return this.messagesService.getAllByChats(query, params);
    }
    async getAllByChatsAndSender(query, params) {
        return this.messagesService.getAllByChatsAndSender(query, params);
    }
    async findById(params) {
        return this.messagesService.findById(params);
    }
    async create(params, body) {
        return this.messagesService.create(params, body);
    }
    async update(params, body) {
        return this.messagesService.update(params, body);
    }
    async delete(params) {
        return this.messagesService.delete(params);
    }
};
exports.MessagesController = MessagesController;
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetAllByChatMessageContract),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.GetAllByChatMessageContract.RequestQuery, contracts_1.GetAllByChatMessageContract.RequestParams]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getAllByChats", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetAllByChatAndSenderMessageContract),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.GetAllByChatAndSenderMessageContract.RequestQuery, contracts_1.GetAllByChatAndSenderMessageContract.RequestParams]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getAllByChatsAndSender", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.FindByIdMessageContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.FindByIdMessageContract.RequestParams]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "findById", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.CreateMessageContract),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.CreateMessageContract.RequestParams, contracts_1.CreateMessageContract.RequestBody]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "create", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.UpdateMessageContract),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.UpdateMessageContract.RequestParams, contracts_1.UpdateMessageContract.RequestBody]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "update", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.DeleteMessageContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.DeleteMessageContract.RequestParams]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "delete", null);
exports.MessagesController = MessagesController = __decorate([
    (0, _shared_1.ApplyHttpControllerContract)(contracts_1.MessagesContract),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);
//# sourceMappingURL=messages.controller.js.map