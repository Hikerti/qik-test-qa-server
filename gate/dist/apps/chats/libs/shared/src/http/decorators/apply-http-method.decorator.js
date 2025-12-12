"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyHttpMethodContract = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _systems_1 = require("../../../../systems/src");
const utility_1 = require("../utility");
const ApplyHttpMethodContract = (contract) => {
    const decorators = [
        utility_1.Utility.formMethodDecorator(contract?.method, contract?.path),
        (0, swagger_1.ApiOperation)({
            summary: contract?.name,
            description: contract?.description,
        }),
        contract?.ResponseBody &&
            (0, swagger_1.ApiOkResponse)({
                type: contract?.ResponseBody,
            }),
        contract?.jwt ? (0, _systems_1.UseJWTGuard)(contract.jwt) : null,
    ];
    return (0, common_1.applyDecorators)(...decorators.filter(Boolean));
};
exports.ApplyHttpMethodContract = ApplyHttpMethodContract;
//# sourceMappingURL=apply-http-method.decorator.js.map