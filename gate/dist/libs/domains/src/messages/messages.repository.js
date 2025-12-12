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
exports.MessagesRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const messages_entities_1 = require("./messages.entities");
let MessagesRepository = class MessagesRepository {
    constructor(messagesRepository) {
        this.messagesRepository = messagesRepository;
    }
    async getAllByChats(chatId, query) {
        const { page, limit } = query;
        const skip = (page - 1) * limit;
        const [messages, total_count] = await this.messagesRepository.findAndCount({
            where: { chatId },
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
        });
        return {
            messages: messages,
            total_count,
        };
    }
    async getAllByChatsAndSender(chatId, sender, query) {
        const { page, limit } = query;
        const skip = (page - 1) * limit;
        const [messages, total_count] = await this.messagesRepository.findAndCount({
            where: { chatId, sender },
            take: limit,
            skip: skip,
            order: { createdAt: 'DESC' },
        });
        return {
            messages: messages,
            total_count,
        };
    }
    async findById(id) {
        const messages = await this.messagesRepository.findOne({ where: { id } });
        if (!messages) {
            return null;
        }
        return messages;
    }
    async create(chatId, body) {
        const newMessages = this.messagesRepository.create(body);
        newMessages.chatId = chatId;
        return this.messagesRepository.save(newMessages);
    }
    async update(id, body) {
        const messages = await this.findById(id);
        const updatedMessages = Object.assign(messages, body);
        return this.messagesRepository.save(updatedMessages);
    }
    async delete(id) {
        const result = await this.messagesRepository.delete(id);
        return result.affected === 0 ? false : true;
    }
};
exports.MessagesRepository = MessagesRepository;
exports.MessagesRepository = MessagesRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(messages_entities_1.Messages)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MessagesRepository);
//# sourceMappingURL=messages.repository.js.map