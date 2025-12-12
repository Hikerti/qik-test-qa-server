import { CallHandler, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class HttpResponsePackageInterceptor implements NestInterceptor {
    intercept(_: any, next: CallHandler): Observable<unknown>;
}
