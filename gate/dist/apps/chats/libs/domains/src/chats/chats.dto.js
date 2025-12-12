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
exports.ChatsDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared/src");
const class_validator_1 = require("class-validator");
let ChatsDTO = class ChatsDTO {
    static fromModel(model) {
        return {
            id: model.id,
            title: model.title,
            createdAt: model.createdAt,
        };
    }
};
exports.ChatsDTO = ChatsDTO;
__decorate([
    (0, _shared_1.IdField)(),
    __metadata("design:type", String)
], ChatsDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChatsDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ChatsDTO.prototype, "createdAt", void 0);
exports.ChatsDTO = ChatsDTO = __decorate([
    (0, _shared_1.ApiSchemaName)('ChatsDTO')
], ChatsDTO);
(function (ChatsDTO) {
    let Create = class Create extends (0, swagger_1.OmitType)(ChatsDTO, ['id', 'createdAt']) {
    };
    Create = __decorate([
        (0, _shared_1.ApiSchemaName)('ChatsCreateDTO')
    ], Create);
    ChatsDTO.Create = Create;
    let Update = class Update extends (0, swagger_1.PartialType)(ChatsDTO.Create) {
    };
    Update = __decorate([
        (0, _shared_1.ApiSchemaName)('ChatsUpdateDTO')
    ], Update);
    ChatsDTO.Update = Update;
})(ChatsDTO || (exports.ChatsDTO = ChatsDTO = {}));
//# sourceMappingURL=chats.dto.js.map