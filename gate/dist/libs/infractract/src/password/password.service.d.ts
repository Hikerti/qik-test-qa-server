import { ConfigService } from '@nestjs/config';
import { ConfigSchema } from '@infractract/config';
export declare class PasswordService {
    private config;
    constructor(config: ConfigService<ConfigSchema.Scope.JWT>);
    hashPassword: (password: string) => Promise<string>;
    checkPassword: (password: string, hash: string) => Promise<boolean>;
}
