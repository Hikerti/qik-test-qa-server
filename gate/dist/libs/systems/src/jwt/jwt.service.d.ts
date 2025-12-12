import { JwtPayload } from 'jsonwebtoken';
import { Nullable } from '@shared';
import { AuthPayload, TokenType } from './types';
import { TokenResolverService } from './resolvers';
export declare class JwtService {
    private readonly resolver;
    constructor(resolver: TokenResolverService);
    getMaxAge(tokenType: TokenType): number;
    signToken<T>(payload: JwtPayload & T, type: TokenType): string;
    verifyToken<T>(token: string, type: TokenType): Nullable<T>;
    signAuthTokens(payload: JwtPayload & AuthPayload): {
        access: string;
        refresh: string;
    };
}
