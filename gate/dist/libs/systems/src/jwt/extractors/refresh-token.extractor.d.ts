import { Request } from 'express';
import { Nullable } from '@shared';
import { TokenExtractor } from './token-extractor.interface';
export declare class RefreshTokenExtractor implements TokenExtractor {
    extract(request: Request): Nullable<string>;
}
