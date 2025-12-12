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
exports.ChatsController = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../libs/shared/src");
const chats_service_1 = require("./chats.service");
const _systems_1 = require("../../../libs/systems/src");
const contracts_1 = require("./contracts");
let ChatsController = class ChatsController {
    constructor(chatsService) {
        this.chatsService = chatsService;
    }
    async getAllByUser(query, authPayload) {
        return this.chatsService.getAllByUser(query, authPayload);
    }
    async findById(params) {
        return this.chatsService.findById(params);
    }
    async create(body, authPayload) {
        return this.chatsService.create(body, authPayload);
    }
    async update(params, body) {
        return this.chatsService.update(params, body);
    }
    async delete(params) {
        return this.chatsService.delete(params);
    }
};
exports.ChatsController = ChatsController;
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetAllByUserChatsContract),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.GetAllByUserChatsContract.RequestQuery, Object]),
    __metadata("design:returntype", Promise)
], ChatsController.prototype, "getAllByUser", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.FindByIdChatContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.FindByIdChatContract.RequestParams]),
    __metadata("design:returntype", Promise)
], ChatsController.prototype, "findById", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.CreateChatContract),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.CreateChatContract.RequestBody, Object]),
    __metadata("design:returntype", Promise)
], ChatsController.prototype, "create", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.UpdateChatContract),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.UpdateChatContract.RequestParams, contracts_1.UpdateChatContract.RequestBody]),
    __metadata("design:returntype", Promise)
], ChatsController.prototype, "update", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.DeleteChatContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.DeleteChatContract.RequestParams]),
    __metadata("design:returntype", Promise)
], ChatsController.prototype, "delete", null);
exports.ChatsController = ChatsController = __decorate([
    (0, _shared_1.ApplyHttpControllerContract)(contracts_1.ChatsContract),
    __metadata("design:paramtypes", [chats_service_1.ChatsService])
], ChatsController);
//# sourceMappingURL=chats.controller.js.map