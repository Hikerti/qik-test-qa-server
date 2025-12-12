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
exports.UserAuthMethod = exports.UserAuthType = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../user");
var UserAuthType;
(function (UserAuthType) {
    UserAuthType["YANDEX"] = "yandex";
    UserAuthType["VK"] = "vk";
    UserAuthType["PASSWORD"] = "password";
})(UserAuthType || (exports.UserAuthType = UserAuthType = {}));
let UserAuthMethod = class UserAuthMethod {
};
exports.UserAuthMethod = UserAuthMethod;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserAuthMethod.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: UserAuthType,
    }),
    __metadata("design:type", String)
], UserAuthMethod.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], UserAuthMethod.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.authMethods, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_1.User)
], UserAuthMethod.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], UserAuthMethod.prototype, "userId", void 0);
exports.UserAuthMethod = UserAuthMethod = __decorate([
    (0, typeorm_1.Entity)('user_auth_methods'),
    (0, typeorm_1.Unique)(['user', 'type'])
], UserAuthMethod);
//# sourceMappingURL=user-auth-method.entities.js.map