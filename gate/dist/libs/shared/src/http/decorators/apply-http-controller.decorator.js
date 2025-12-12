"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyHttpControllerContract = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _systems_1 = require("../../../../systems/src");
const ApplyHttpControllerContract = (contract) => {
    const decorators = [(0, swagger_1.ApiTags)(contract.name), (0, common_1.Controller)(contract.path ?? ''), (0, common_1.UseGuards)(_systems_1.JwtGuard)];
    return (0, common_1.applyDecorators)(...decorators.filter(Boolean));
};
exports.ApplyHttpControllerContract = ApplyHttpControllerContract;
//# sourceMappingURL=apply-http-controller.decorator.js.map