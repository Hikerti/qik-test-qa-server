import { AuthPayload } from '../types';
import { BaseTokenResolver } from './base-token.resolver';
import { TokenResolver } from './token-resolver.interface';
export declare class RefreshTokenResolver extends BaseTokenResolver implements TokenResolver<AuthPayload> {
    get secret(): any;
    get maxAge(): number;
    sign(payload: AuthPayload): string;
    verify(token: string): AuthPayload;
}
