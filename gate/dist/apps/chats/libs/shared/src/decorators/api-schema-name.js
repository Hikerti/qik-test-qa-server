"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSchemaName = void 0;
const ApiSchemaName = (name) => {
    return (constructor) => {
        const wrapper = class extends constructor {
        };
        Object.defineProperty(wrapper, 'name', {
            value: name,
            writable: false,
        });
        return wrapper;
    };
};
exports.ApiSchemaName = ApiSchemaName;
//# sourceMappingURL=api-schema-name.js.map