import { ConfigService } from '@nestjs/config';
import { ConfigSchema } from '@infractract/config';
export declare class BaseTokenResolver {
    protected readonly config: ConfigService<ConfigSchema.Scope.JWT>;
    constructor(config: ConfigService<ConfigSchema.Scope.JWT>);
}
