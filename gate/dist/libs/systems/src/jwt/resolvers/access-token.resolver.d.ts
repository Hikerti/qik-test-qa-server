import { BaseTokenResolver } from './base-token.resolver';
import { TokenResolver } from './token-resolver.interface';
import { AuthPayload } from '../types';
export declare class AccessTokenResolver extends BaseTokenResolver implements TokenResolver<AuthPayload> {
    get secret(): any;
    get maxAge(): number;
    sign(payload: AuthPayload): string;
    verify(token: string): AuthPayload;
}
