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
exports.ChatsRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const chats_entities_1 = require("./chats.entities");
let ChatsRepository = class ChatsRepository {
    constructor(chatsRepository) {
        this.chatsRepository = chatsRepository;
    }
    async getAllByUser(userId, query) {
        const { page, limit } = query;
        const skip = (page - 1) * limit;
        const [chats, total_count] = await this.chatsRepository.findAndCount({
            where: { userId },
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
        });
        return {
            chats: chats,
            total_count,
        };
    }
    async findById(id) {
        const chat = await this.chatsRepository.findOne({ where: { id } });
        if (!chat) {
            return null;
        }
        return chat;
    }
    async findByUser(userId) {
        return this.chatsRepository.findOne({ where: { userId } });
    }
    async create(userId, body) {
        const newChat = this.chatsRepository.create(body);
        newChat.userId = userId;
        return this.chatsRepository.save(newChat);
    }
    async update(id, body) {
        const chat = await this.findById(id);
        const updatedChat = Object.assign(chat, body);
        return this.chatsRepository.save(updatedChat);
    }
    async delete(id) {
        const result = await this.chatsRepository.delete(id);
        return result.affected === 0 ? false : true;
    }
};
exports.ChatsRepository = ChatsRepository;
exports.ChatsRepository = ChatsRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(chats_entities_1.Chats)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChatsRepository);
//# sourceMappingURL=chats.repository.js.map