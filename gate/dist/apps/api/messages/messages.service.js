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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let MessagesService = class MessagesService {
    constructor(messagesClient) {
        this.messagesClient = messagesClient;
    }
    async getAllByChats(query, params) {
        return this.messagesClient
            .send('messages.getAllByChats', { query, params })
            .toPromise();
    }
    async getAllByChatsAndSender(query, params) {
        return this.messagesClient
            .send('messages.getAllByChatsAndSender', { query, params })
            .toPromise();
    }
    async findById(params) {
        return this.messagesClient
            .send('messages.findById', { params })
            .toPromise();
    }
    async create(params, body) {
        return this.messagesClient
            .send('messages.create', { params, body })
            .toPromise();
    }
    async update(params, body) {
        return this.messagesClient
            .send('messages.update', { params, body })
            .toPromise();
    }
    async delete(params) {
        return this.messagesClient.send('messages.delete', { params }).toPromise();
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MESSAGES_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], MessagesService);
//# sourceMappingURL=messages.service.js.map