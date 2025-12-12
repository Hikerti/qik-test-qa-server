import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { HttpError } from '../error';
import { LoggerService } from '@infractract/logger';
export declare class HttpErrorFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: LoggerService);
    catch(error: HttpError, host: ArgumentsHost): void;
}
