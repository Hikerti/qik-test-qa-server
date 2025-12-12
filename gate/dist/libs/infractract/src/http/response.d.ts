import { Http } from './types';
export declare class HttpResponse<Payload = unknown> {
    code: Http.Code;
    message?: string;
    payload?: unknown;
    constructor(response: HttpResponse<Payload>);
}
