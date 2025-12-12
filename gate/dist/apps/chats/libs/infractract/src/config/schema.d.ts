import { Data } from './data';
export declare namespace Schema {
    namespace Service {
        class Gate {
            static service: Data.Service;
            GATE_HTTP_PORT: number;
            GATE_HTTP_ALLOWED_ORIGINS: string;
        }
        const Self: (typeof Gate)[];
    }
    namespace Scope {
        class Database {
            static scope: Data.Scope;
            DATABASE_HOST: string;
            DATABASE_UI_PORT: number;
            DATABASE_PORT: number;
            DATABASE_USER: string;
            DATABASE_PASSWORD: string;
            DATABASE_NAME: string;
        }
        class S3 {
            static scope: Data.Scope;
            S3_USER: string;
            S3_PASSWORD: string;
            S3_PORT: string;
            S3_HOST: string;
            S3_BUCKET: string;
            S3_REGION: string;
        }
        class JWT {
            static scope: Data.Scope;
            JWT_REFRESH_TOKEN_SECRET: number;
            JWT_ACCESS_TOKEN_SECRET: number;
            SALT_ROUNDS: number;
        }
        class NATS {
            static scope: Data.Scope;
            NATS_PATH_LOCAL: string;
            NATS_PATH_PROD: string;
        }
        const Self: (typeof Database | typeof S3 | typeof JWT | typeof NATS)[];
    }
}
