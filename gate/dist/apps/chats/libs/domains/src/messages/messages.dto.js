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
exports.MessagesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const _domains_1 = require("..");
const _shared_1 = require("../../../shared/src");
const class_validator_1 = require("class-validator");
let MessagesDTO = class MessagesDTO {
    static fromModel(model) {
        return {
            id: model.id,
            content: model.content,
            sender: model.sender,
            createdAt: model.createdAt,
        };
    }
};
exports.MessagesDTO = MessagesDTO;
__decorate([
    (0, _shared_1.IdField)(),
    __metadata("design:type", String)
], MessagesDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessagesDTO.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(() => _domains_1.SenderType),
    __metadata("design:type", String)
], MessagesDTO.prototype, "sender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], MessagesDTO.prototype, "createdAt", void 0);
exports.MessagesDTO = MessagesDTO = __decorate([
    (0, _shared_1.ApiSchemaName)('MessagesDTO')
], MessagesDTO);
(function (MessagesDTO) {
    let Create = class Create extends (0, swagger_1.OmitType)(MessagesDTO, ['id', 'createdAt']) {
    };
    Create = __decorate([
        (0, _shared_1.ApiSchemaName)('MessagesCreateDTO')
    ], Create);
    MessagesDTO.Create = Create;
    let Update = class Update extends (0, swagger_1.PartialType)(MessagesDTO.Create) {
    };
    Update = __decorate([
        (0, _shared_1.ApiSchemaName)('MessagesUpdateDTO')
    ], Update);
    MessagesDTO.Update = Update;
})(MessagesDTO || (exports.MessagesDTO = MessagesDTO = {}));
//# sourceMappingURL=messages.dto.js.map