import { IsInt, IsString } from 'class-validator';
import { Data } from './data';
import { Type } from 'class-transformer';

export namespace Schema {
  export namespace Service {
    export class Gate {
      static service: Data.Service = Data.Service.Enum.Gate;

      @Type(() => Number)
      @IsInt()
      GATE_HTTP_PORT: number;
      @IsString()
      GATE_HTTP_ALLOWED_ORIGINS: string;
    }

    export const Self = [Gate];
  }

  export namespace Scope {
    export class Database {
      static scope: Data.Scope = Data.Scope.Enum.Database;

      @IsString()
      DATABASE_HOST: string;
      @Type(() => Number)
      @IsInt()
      DATABASE_UI_PORT: number;
      @Type(() => Number)
      @IsInt()
      DATABASE_PORT: number;
      @IsString()
      DATABASE_USER: string;
      @IsString()
      DATABASE_PASSWORD: string;
      @IsString()
      DATABASE_NAME: string;
    }

    export class S3 {
      static scope: Data.Scope = Data.Scope.Enum.S3;

      @IsString()
      S3_USER: string;
      @IsString()
      S3_PASSWORD: string;
      @IsInt()
      @Type(() => Number)
      S3_PORT: string;
      @IsString()
      S3_HOST: string;
      @IsString()
      S3_BUCKET: string;
      @IsString()
      S3_REGION: string;
    }

    export class JWT {
      static scope: Data.Scope = Data.Scope.Enum.JWT;

      @Type(() => Number)
      @IsInt()
      JWT_REFRESH_TOKEN_SECRET: number;
      @Type(() => Number)
      @IsInt()
      JWT_ACCESS_TOKEN_SECRET: number;
      @Type(() => Number)
      @IsInt()
      SALT_ROUNDS: number;
    }

    export const Self = [Database, S3];
  }
}
