import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddPasswordToUser1765264072519 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
