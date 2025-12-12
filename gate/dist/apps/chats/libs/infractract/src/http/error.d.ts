import { HttpStatus } from '@nestjs/common';
import { Http } from './types';
export declare class HttpError {
    status: HttpStatus;
    code: Http.Code;
    message?: string;
    constructor(response: HttpError);
}
