import type { Union } from '@shared';
export declare namespace Data {
    type Scope = Union<Scope.Enum>;
    namespace Scope {
        enum Enum {
            Database = "database",
            S3 = "s3",
            JWT = "jwt",
            NATS = "nats"
        }
    }
    type Service = Union<Service.Enum>;
    namespace Service {
        enum Enum {
            Gate = "gate"
        }
    }
}
