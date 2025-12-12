import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenResolverService } from './resolvers';
import { TokenExtractorService } from './extractors';
export declare class JwtGuard implements CanActivate {
    private readonly reflector;
    private readonly extractor;
    private readonly tokenConverterService;
    constructor(reflector: Reflector, extractor: TokenExtractorService, tokenConverterService: TokenResolverService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private enrichRequestByToken;
}
