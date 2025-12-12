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
exports.Schema = void 0;
const class_validator_1 = require("class-validator");
const data_1 = require("./data");
const class_transformer_1 = require("class-transformer");
var Schema;
(function (Schema) {
    let Service;
    (function (Service) {
        class Gate {
        }
        Gate.service = data_1.Data.Service.Enum.Gate;
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], Gate.prototype, "GATE_HTTP_PORT", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Gate.prototype, "GATE_HTTP_ALLOWED_ORIGINS", void 0);
        Service.Gate = Gate;
        Service.Self = [Gate];
    })(Service = Schema.Service || (Schema.Service = {}));
    let Scope;
    (function (Scope) {
        class Database {
        }
        Database.scope = data_1.Data.Scope.Enum.Database;
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Database.prototype, "DATABASE_HOST", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], Database.prototype, "DATABASE_UI_PORT", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], Database.prototype, "DATABASE_PORT", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Database.prototype, "DATABASE_USER", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Database.prototype, "DATABASE_PASSWORD", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], Database.prototype, "DATABASE_NAME", void 0);
        Scope.Database = Database;
        class S3 {
        }
        S3.scope = data_1.Data.Scope.Enum.S3;
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_USER", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_PASSWORD", void 0);
        __decorate([
            (0, class_validator_1.IsInt)(),
            (0, class_transformer_1.Type)(() => Number),
            __metadata("design:type", String)
        ], S3.prototype, "S3_PORT", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_HOST", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_BUCKET", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], S3.prototype, "S3_REGION", void 0);
        Scope.S3 = S3;
        class JWT {
        }
        JWT.scope = data_1.Data.Scope.Enum.JWT;
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], JWT.prototype, "JWT_REFRESH_TOKEN_SECRET", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], JWT.prototype, "JWT_ACCESS_TOKEN_SECRET", void 0);
        __decorate([
            (0, class_transformer_1.Type)(() => Number),
            (0, class_validator_1.IsInt)(),
            __metadata("design:type", Number)
        ], JWT.prototype, "SALT_ROUNDS", void 0);
        Scope.JWT = JWT;
        class NATS {
        }
        NATS.scope = data_1.Data.Scope.Enum.NATS;
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], NATS.prototype, "NATS_PATH_LOCAL", void 0);
        __decorate([
            (0, class_validator_1.IsString)(),
            __metadata("design:type", String)
        ], NATS.prototype, "NATS_PATH_PROD", void 0);
        Scope.NATS = NATS;
        Scope.Self = [Database, S3, JWT, NATS];
    })(Scope = Schema.Scope || (Schema.Scope = {}));
})(Schema || (exports.Schema = Schema = {}));
//# sourceMappingURL=schema.js.map