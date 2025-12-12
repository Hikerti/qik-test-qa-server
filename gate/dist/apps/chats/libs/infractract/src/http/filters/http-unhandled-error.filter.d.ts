import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { LoggerService } from '@infractract/logger';
export declare class HttpUnhandledErrorFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: LoggerService);
    catch(exception: Error, host: ArgumentsHost): void;
}
