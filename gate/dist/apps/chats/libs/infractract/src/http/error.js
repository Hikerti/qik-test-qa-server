"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError {
    constructor(response) {
        this.status = response.status;
        this.code = response.code;
        this.message = response.message;
    }
}
exports.HttpError = HttpError;
//# sourceMappingURL=error.js.map