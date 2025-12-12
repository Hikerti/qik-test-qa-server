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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const _systems_1 = require("../../../libs/systems/src");
const auth_service_1 = require("./auth.service");
const contracts_1 = require("./contracts");
const _shared_1 = require("../../../libs/shared/src");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(res, body) {
        return this.authService.register(res, body);
    }
    async login(res, body) {
        return this.authService.login(res, body);
    }
    async refresh(res, authPayload) {
        return this.authService.refresh(res, authPayload);
    }
    async logout(res) {
        return this.authService.logout(res);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.RegisterContract),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, contracts_1.RegisterContract.RequestBody]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.LoginContract),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, contracts_1.LoginContract.RequestBody]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.RefreshContract),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, _systems_1.AuthTokenPayload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, _shared_1.ApplyHttpMethodContract)(contracts_1.LogoutContract),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, _shared_1.ApplyHttpControllerContract)(contracts_1.AuthContract),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map