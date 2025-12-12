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
exports.PaginationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _shared_1 = require("..");
var PaginationDTO;
(function (PaginationDTO) {
    let Request = class Request {
        constructor() {
            this.page = 1;
            this.limit = 10;
        }
    };
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Request.prototype, "page", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Request.prototype, "limit", void 0);
    Request = __decorate([
        (0, _shared_1.ApiSchemaName)('PaginationRequestDTO')
    ], Request);
    PaginationDTO.Request = Request;
    let Response = class Response {
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Total count of pages' }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Response.prototype, "page", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Total count of pages' }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Response.prototype, "total_pages", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Count of items on page' }),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(() => Number),
        __metadata("design:type", Number)
    ], Response.prototype, "items_count", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Flag if page is the last one' }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], Response.prototype, "is_last_page", void 0);
    Response = __decorate([
        (0, _shared_1.ApiSchemaName)('PaginationResponseDTO')
    ], Response);
    PaginationDTO.Response = Response;
})(PaginationDTO || (exports.PaginationDTO = PaginationDTO = {}));
//# sourceMappingURL=pagination.dto.js.map