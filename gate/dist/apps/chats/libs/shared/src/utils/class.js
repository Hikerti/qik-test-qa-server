"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateClass = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const validateClass = (schema, object) => {
    const validationConfig = (0, class_transformer_1.plainToInstance)(schema, object, {
        enableImplicitConversion: true,
    });
    const errors = (0, class_validator_1.validateSync)(validationConfig, {
        skipMissingProperties: false,
    });
    if (errors.length > 0) {
        throw Error(`validateClass Class is not valid: ${errors
            .map((e) => e.property + ' must be ' + Object.keys(e.constraints || {}).toLocaleString())
            .join(';')}`);
    }
    return validationConfig;
};
exports.validateClass = validateClass;
//# sourceMappingURL=class.js.map