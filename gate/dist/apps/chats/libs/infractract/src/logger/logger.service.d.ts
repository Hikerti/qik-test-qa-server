import { ConsoleLogger } from '@nestjs/common';
export declare class LoggerService extends ConsoleLogger {
    d(logTag: string, message: string, values?: object): void;
    l(logTag: string, message: string, values?: object): void;
    w(logTag: string, message: string, values?: object): void;
    e(logTag: string, message: string, values?: object): void;
    f(logTag: string, message: string, values?: object): void;
    private formMessage;
}
