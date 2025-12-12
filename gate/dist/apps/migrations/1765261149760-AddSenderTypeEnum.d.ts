import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddSenderTypeEnum1765261149760 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
