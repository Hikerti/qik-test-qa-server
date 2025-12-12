import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { CustomValidationError } from '../../validation';
import { LoggerService } from '@infractract/logger';
export declare class HttpValidationErrorFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: LoggerService);
    catch(exception: CustomValidationError, host: ArgumentsHost): void;
}
