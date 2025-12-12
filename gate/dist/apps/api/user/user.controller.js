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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../libs/shared/src");
const _systems_1 = require("../../../libs/systems/src");
const user_service_1 = require("./user.service");
const contracts_1 = require("./contracts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getList(query) {
        return this.userService.getList(query);
    }
    async findById(params) {
        return this.userService.findById(params);
    }
    async findAuthorized(auth) {
        return this.userService.findAuthorized(auth);
    }
    async updateById(params, body) {
        return this.userService.updateById(params, body);
    }
    async updateAuthorized(body, auth) {
        return this.userService.updateAuthorized(auth, body);
    }
};
exports.UserController = UserController;
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetUsersListContract),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.GetUsersListContract.RequestQuery]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getList", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.FindUserContract),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.FindUserContract.RequestParams]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.GetAuthorizedUserContract),
    __param(0, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAuthorized", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.UpdateUserContract),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.UpdateUserContract.RequestParams, contracts_1.UpdateUserContract.RequestBody]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateById", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.UpdateAuthorizeUserContract),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contracts_1.UpdateAuthorizeUserContract.RequestBody, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateAuthorized", null);
exports.UserController = UserController = __decorate([
    (0, _shared_1.ApplyHttpControllerContract)(contracts_1.UsersContract),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map