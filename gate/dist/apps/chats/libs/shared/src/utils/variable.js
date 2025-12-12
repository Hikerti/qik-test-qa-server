"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = assert;
function assert(value, message = 'Variable is not defined or is null') {
    if (value === null || value === undefined || value === '') {
        throw new Error(message);
    }
}
//# sourceMappingURL=variable.js.map