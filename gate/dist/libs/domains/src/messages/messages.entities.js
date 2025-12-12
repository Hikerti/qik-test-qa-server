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
exports.Messages = exports.SenderType = void 0;
const typeorm_1 = require("typeorm");
const chats_1 = require("../chats");
var SenderType;
(function (SenderType) {
    SenderType["USER"] = "user";
    SenderType["SENDER"] = "sender";
})(SenderType || (exports.SenderType = SenderType = {}));
let Messages = class Messages {
};
exports.Messages = Messages;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Messages.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Messages.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: SenderType,
        default: SenderType.USER,
    }),
    __metadata("design:type", String)
], Messages.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], Messages.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chats_1.Chats, (chat) => chat.messages, { onDelete: 'CASCADE' }),
    __metadata("design:type", chats_1.Chats)
], Messages.prototype, "chat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Messages.prototype, "chatId", void 0);
exports.Messages = Messages = __decorate([
    (0, typeorm_1.Entity)('messages')
], Messages);
//# sourceMappingURL=messages.entities.js.map