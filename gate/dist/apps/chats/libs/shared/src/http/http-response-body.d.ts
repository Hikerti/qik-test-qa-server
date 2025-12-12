import { Type } from '@nestjs/common';
import { HttpResponse } from '@infractract/http';
export declare const HttpResponseBody: <T extends object>(responsePayload: Type<T>) => Type<HttpResponse<T>>;
