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
exports.ChatsService = void 0;
const _domains_1 = require("../../../../libs/domains/src");
const common_1 = require("@nestjs/common");
let ChatsService = class ChatsService {
    constructor(chatsRepository) {
        this.chatsRepository = chatsRepository;
    }
    async getAllByUser(query, authPayload) {
        const { limit, page } = query;
        const { chats, total_count } = await this.chatsRepository.getAllByUser(authPayload.owner.id, query);
        const total_pages = Math.ceil(total_count / limit);
        const is_last_page = page >= total_pages;
        const items_count = chats.length;
        const paginationResponse = {
            page: page,
            total_pages: total_pages,
            items_count: items_count,
            is_last_page: is_last_page,
        };
        return {
            chats: chats,
            pagination: paginationResponse,
        };
    }
    async findById(params) {
        const model = await this.chatsRepository.findById(params.id);
        return { chat: _domains_1.ChatsDTO.fromModel(model) };
    }
    async create(body, authPayload) {
        const model = await this.chatsRepository.create(authPayload.owner.id, body);
        return { chat: _domains_1.ChatsDTO.fromModel(model) };
    }
    async update(params, body) {
        const model = await this.chatsRepository.update(params.id, body);
        return { chat: _domains_1.ChatsDTO.fromModel(model) };
    }
    async delete(params) {
        const model = await this.chatsRepository.delete(params.id);
        return { deleted: model };
    }
};
exports.ChatsService = ChatsService;
exports.ChatsService = ChatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_domains_1.ChatsRepository])
], ChatsService);
//# sourceMappingURL=chats.service.js.map