"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipeOptions = void 0;
const custom_validation_error_1 = require("./custom-validation-error");
class ValidationPipeOptions {
    constructor() {
        this.transform = true;
        this.exceptionFactory = this.exceptionFactory.bind(this);
    }
    exceptionFactory(errors) {
        const message = ValidationPipeOptions.handleErrorsArray(errors);
        return new custom_validation_error_1.CustomValidationError({ message });
    }
}
exports.ValidationPipeOptions = ValidationPipeOptions;
(function (ValidationPipeOptions) {
    ValidationPipeOptions.handleSingleError = (e) => {
        if (e.constraints)
            return Object.values(e.constraints).join('; ');
        if (e.children)
            return e.children.map(ValidationPipeOptions.handleSingleError).join('; ');
        return null;
    };
    ValidationPipeOptions.handleErrorsArray = (errors) => errors.map(ValidationPipeOptions.handleSingleError).filter(Boolean).join('; ');
})(ValidationPipeOptions || (exports.ValidationPipeOptions = ValidationPipeOptions = {}));
//# sourceMappingURL=custom-validation-pipe-options.js.map