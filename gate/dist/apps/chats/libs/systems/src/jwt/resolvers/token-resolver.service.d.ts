import { ConfigService } from '@nestjs/config';
import { JwtPayload } from 'jsonwebtoken';
import { Nullable } from '@shared';
import { TokenType } from '../types';
import { ConfigSchema } from '@infractract/config';
export declare class TokenResolverService {
    private readonly configService;
    private readonly _jwtType2TokenConvertor;
    constructor(configService: ConfigService<ConfigSchema.Scope.JWT>);
    getMaxAge(tokenType: TokenType): number;
    sign<T>(tokenType: TokenType, payload: JwtPayload & T): Nullable<string>;
    verify<T>(tokenType: TokenType, token: string): Nullable<JwtPayload & T>;
}
