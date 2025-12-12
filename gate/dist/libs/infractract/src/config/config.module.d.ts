import { DynamicModule } from '@nestjs/common';
import { Data } from './data';
export declare class ConfigProvider {
    static forRoot(scopes: Data.Scope[], service?: Data.Service): Promise<DynamicModule>;
}
