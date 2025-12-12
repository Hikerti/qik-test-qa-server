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
exports.Chats = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../user");
const messages_1 = require("../messages");
let Chats = class Chats {
};
exports.Chats = Chats;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Chats.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Chats.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], Chats.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.chats, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_1.User)
], Chats.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Chats.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => messages_1.Messages, (message) => message.chat),
    __metadata("design:type", Array)
], Chats.prototype, "messages", void 0);
exports.Chats = Chats = __decorate([
    (0, typeorm_1.Entity)('chats')
], Chats);
//# sourceMappingURL=chats.entities.js.map