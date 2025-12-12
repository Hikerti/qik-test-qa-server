"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdField = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const IdField = (options) => {
    const isOptional = options?.isOptional || false;
    const isArray = options?.each || false;
    const decorators = [];
    if (isOptional) {
        decorators.push((0, swagger_1.ApiPropertyOptional)({ type: String, isArray }), (0, class_validator_1.IsOptional)());
    }
    else {
        decorators.push((0, swagger_1.ApiProperty)({ type: String, isArray }), (0, class_validator_1.IsNotEmpty)());
    }
    decorators.push((0, class_validator_1.IsUUID)(4, { each: isArray }));
    return (0, common_1.applyDecorators)(...decorators);
};
exports.IdField = IdField;
//# sourceMappingURL=id.decorator.js.map