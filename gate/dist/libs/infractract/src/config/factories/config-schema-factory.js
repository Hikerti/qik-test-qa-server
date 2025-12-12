"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigSchemaFactory = void 0;
const swagger_1 = require("@nestjs/swagger");
const schema_1 = require("../schema");
const LOG_TAG = 'ConfigSchemaFactory';
class ConfigSchemaFactory {
    static create(scopes, service) {
        const schemas = [];
        scopes.forEach((scope) => {
            const expectedSchema = schema_1.Schema.Scope.Self.find((i) => i.scope === scope);
            if (expectedSchema) {
                schemas.push(expectedSchema);
            }
            else {
                console.error(LOG_TAG + `|create Schema [scope=${scope}] was not found`);
            }
        });
        if (service) {
            const expectedSchema = schema_1.Schema.Service.Self.find((i) => i.service === service);
            if (expectedSchema) {
                schemas.push(expectedSchema);
            }
            else {
                console.error(LOG_TAG + `|create Schema [service=${service}] was not found`);
            }
        }
        return (0, swagger_1.IntersectionType)(...schemas);
    }
}
exports.ConfigSchemaFactory = ConfigSchemaFactory;
//# sourceMappingURL=config-schema-factory.js.map