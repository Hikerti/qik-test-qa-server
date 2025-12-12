"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const _domains_1 = require("../../../../libs/domains/src");
class MessagesService {
    constructor(messagesRepository) {
        this.messagesRepository = messagesRepository;
    }
    async getAllByChats(query, params) {
        const { chatId } = params;
        const { limit, page } = query;
        const { messages, total_count } = await this.messagesRepository.getAllByChats(chatId, query);
        const total_pages = Math.ceil(total_count / limit);
        const is_last_page = page >= total_pages;
        const items_count = messages.length;
        const paginationResponse = {
            page: page,
            total_pages: total_pages,
            items_count: items_count,
            is_last_page: is_last_page,
        };
        return {
            messages: messages,
            pagination: paginationResponse,
        };
    }
    async getAllByChatsAndSender(query, params) {
        const { chatId } = params;
        const { limit, page, sender } = query;
        const { messages, total_count } = await this.messagesRepository.getAllByChatsAndSender(chatId, sender, {
            limit,
            page,
        });
        const total_pages = Math.ceil(total_count / limit);
        const is_last_page = page >= total_pages;
        const items_count = messages.length;
        const paginationResponse = {
            page: page,
            total_pages: total_pages,
            items_count: items_count,
            is_last_page: is_last_page,
        };
        return {
            messages: messages,
            pagination: paginationResponse,
        };
    }
    async findById(params) {
        const model = await this.messagesRepository.findById(params.id);
        return { message: _domains_1.MessagesDTO.fromModel(model) };
    }
    async create(params, body) {
        const model = await this.messagesRepository.create(params.chatId, body);
        return { message: _domains_1.MessagesDTO.fromModel(model) };
    }
    async update(params, body) {
        const model = await this.messagesRepository.update(params.id, body);
        return { message: _domains_1.MessagesDTO.fromModel(model) };
    }
    async delete(params) {
        const model = await this.messagesRepository.delete(params.id);
        return { deleted: model };
    }
}
exports.MessagesService = MessagesService;
//# sourceMappingURL=module.service.js.map