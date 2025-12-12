import type { Constructable } from '@shared';
import { Data } from '../data';
export declare class ConfigSchemaFactory {
    static create(scopes: Data.Scope[], service?: Data.Service): Constructable;
}
