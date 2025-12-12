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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const _domains_1 = require("../../../../libs/domains/src");
const _infractract_1 = require("../../../../libs/infractract/src");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getList(query) {
        const { limit, page } = query;
        const { users, total_count } = await this.userRepository.getAll(query);
        const total_pages = Math.ceil(total_count / limit);
        const is_last_page = page >= total_pages;
        const items_count = users.length;
        const paginationResponse = {
            page: page,
            total_pages: total_pages,
            items_count: items_count,
            is_last_page: is_last_page,
        };
        return {
            users: users.map(_domains_1.UserDTO.fromModel),
            pagination: paginationResponse,
        };
    }
    async findById(params) {
        const model = await this.userRepository.findById(params.userId);
        if (!model) {
            throw new _infractract_1.HttpError({ status: 404, code: 'user_not_found' });
        }
        return { user: _domains_1.UserDTO.fromModel(model) };
    }
    async findAuthorized(auth) {
        const model = await this.userRepository.findById(auth.owner.id);
        if (!model) {
            throw new _infractract_1.HttpError({ status: 404, code: 'user_not_found' });
        }
        return { user: _domains_1.UserDTO.fromModel(model) };
    }
    async updateById(params, body) {
        const model = await this.userRepository.update(params.userId, body);
        return { user: _domains_1.UserDTO.fromModel(model) };
    }
    async updateAuthorized(auth, body) {
        const model = await this.userRepository.update(auth.owner.id, body);
        return { user: _domains_1.UserDTO.fromModel(model) };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_domains_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map