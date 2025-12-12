"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const common_1 = require("@nestjs/common");
const data_1 = require("./data");
class Utility {
}
exports.Utility = Utility;
Utility.formMethodDecorator = (method, path) => {
    switch (method) {
        case data_1.Data.Method.Get:
            return (0, common_1.Get)(path);
        case data_1.Data.Method.Put:
            return (0, common_1.Put)(path);
        case data_1.Data.Method.Patch:
            return (0, common_1.Patch)(path);
        case data_1.Data.Method.Post:
            return (0, common_1.Post)(path);
        case data_1.Data.Method.Delete:
            return (0, common_1.Delete)(path);
        default:
            throw new Error(`Unsupported [method=${method}]`);
    }
};
//# sourceMappingURL=utility.js.map