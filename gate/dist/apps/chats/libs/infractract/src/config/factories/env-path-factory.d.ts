import { Data } from '../data';
export declare class EnvPathFactory {
    private static readonly BASE_DIR;
    private static env;
    static createScopePath(scope: Data.Scope): string;
    static createServicePath(service: Data.Service): string;
    static create(scopes: Data.Scope[], service?: Data.Service): string[];
}
