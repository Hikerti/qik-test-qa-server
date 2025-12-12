"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigProvider = void 0;
const config_1 = require("@nestjs/config");
const _shared_1 = require("../../../shared/src");
const factories_1 = require("./factories");
class ConfigProvider {
    static forRoot(scopes, service) {
        return config_1.ConfigModule.forRoot({
            envFilePath: factories_1.EnvPathFactory.create(scopes, service),
            isGlobal: true,
            validate: (config) => {
                return (0, _shared_1.validateClass)(factories_1.ConfigSchemaFactory.create(scopes, service), config);
            },
        });
    }
}
exports.ConfigProvider = ConfigProvider;
//# sourceMappingURL=config.module.js.map