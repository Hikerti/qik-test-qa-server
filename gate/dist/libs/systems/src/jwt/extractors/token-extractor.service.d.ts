import { Request } from 'express';
import { Nullable } from '@shared';
import { TokenType } from '../types';
export declare class TokenExtractorService {
    private readonly _jwtTypeToTokenExtractor;
    constructor();
    extract(type: TokenType, request: Request): Nullable<string>;
}
