import { Request } from 'express';
import { Nullable } from '@shared';
import { TokenExtractor } from './token-extractor.interface';
export declare class AccessTokenExtractor implements TokenExtractor {
    extract(request: Request): Nullable<string>;
}
