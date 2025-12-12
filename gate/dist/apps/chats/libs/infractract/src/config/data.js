"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data;
(function (Data) {
    let Scope;
    (function (Scope) {
        let Enum;
        (function (Enum) {
            Enum["Database"] = "database";
            Enum["S3"] = "s3";
            Enum["JWT"] = "jwt";
            Enum["NATS"] = "nats";
        })(Enum = Scope.Enum || (Scope.Enum = {}));
    })(Scope = Data.Scope || (Data.Scope = {}));
    let Service;
    (function (Service) {
        let Enum;
        (function (Enum) {
            Enum["Gate"] = "gate";
        })(Enum = Service.Enum || (Service.Enum = {}));
    })(Service = Data.Service || (Data.Service = {}));
})(Data || (exports.Data = Data = {}));
//# sourceMappingURL=data.js.map