import { TokenType } from '../types';
export type JWTGuardOptions = Partial<{
    [key in TokenType]: 'required' | 'optional';
}>;
export declare const UseJWTGuard: import("@nestjs/core").ReflectableDecorator<Partial<{
    access: "required" | "optional";
    refresh: "required" | "optional";
}>, Partial<{
    access: "required" | "optional";
    refresh: "required" | "optional";
}>>;
