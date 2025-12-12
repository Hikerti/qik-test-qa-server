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
exports.UserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const _domains_1 = require("..");
const _shared_1 = require("../../../shared/src");
const class_validator_1 = require("class-validator");
let UserDTO = class UserDTO {
    static fromModel(model) {
        return {
            id: model.id,
            name: model.name,
            email: model.email,
            gitHubId: model.gitHubId,
            theme: model.theme,
            createdAt: model.createdAt,
            lastSentAt: model.lastSentAt,
        };
    }
};
exports.UserDTO = UserDTO;
__decorate([
    (0, _shared_1.IdField)(),
    __metadata("design:type", String)
], UserDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDTO.prototype, "gitHubId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(() => _domains_1.Theme),
    __metadata("design:type", String)
], UserDTO.prototype, "theme", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserDTO.prototype, "lastSentAt", void 0);
exports.UserDTO = UserDTO = __decorate([
    (0, _shared_1.ApiSchemaName)('UserDTO')
], UserDTO);
(function (UserDTO) {
    let Update = class Update extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(UserDTO, ['id', 'createdAt'])) {
    };
    Update = __decorate([
        (0, _shared_1.ApiSchemaName)('UserUpdateDTO')
    ], Update);
    UserDTO.Update = Update;
    let Register = class Register extends (0, swagger_1.PickType)(UserDTO, ['name', 'email']) {
    };
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Register.prototype, "password", void 0);
    Register = __decorate([
        (0, _shared_1.ApiSchemaName)('UserRegisterDTO')
    ], Register);
    UserDTO.Register = Register;
    let Login = class Login extends (0, swagger_1.PickType)(UserDTO, ['email']) {
    };
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Login.prototype, "password", void 0);
    Login = __decorate([
        (0, _shared_1.ApiSchemaName)('UserLoginDTO')
    ], Login);
    UserDTO.Login = Login;
})(UserDTO || (exports.UserDTO = UserDTO = {}));
//# sourceMappingURL=user.dto.js.map