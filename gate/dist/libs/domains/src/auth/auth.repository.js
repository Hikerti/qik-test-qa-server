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
exports.AuthRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_1 = require("../user");
const user_auth_method_1 = require("../user-auth-method");
let AuthRepository = class AuthRepository {
    constructor(userRepository, authMethodRepository) {
        this.userRepository = userRepository;
        this.authMethodRepository = authMethodRepository;
    }
    async login(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            relations: ['authMethods'],
        });
        if (!user) {
            return null;
        }
        return user;
    }
    async register(body) {
        const existingUser = await this.userRepository.findOne({
            where: { email: body.email },
        });
        if (existingUser) {
            return null;
        }
        const newUser = this.userRepository.create({
            ...body,
        });
        return await this.userRepository.save(newUser);
    }
    async createAuthMethod(userId, hashedPassword) {
        const authMethod = this.authMethodRepository.create({
            type: user_auth_method_1.UserAuthType.PASSWORD,
            reference: hashedPassword,
            userId,
        });
        await this.authMethodRepository.save(authMethod);
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    __param(0, (0, typeorm_2.InjectRepository)(user_1.User)),
    __param(1, (0, typeorm_2.InjectRepository)(user_auth_method_1.UserAuthMethod)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], AuthRepository);
//# sourceMappingURL=auth.repository.js.map