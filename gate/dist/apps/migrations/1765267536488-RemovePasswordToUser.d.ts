import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RemovePasswordToUser1765267536488 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
