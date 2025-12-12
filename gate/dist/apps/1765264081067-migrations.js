"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1765264081067 = void 0;
class Migrations1765264081067 {
    constructor() {
        this.name = 'Migrations1765264081067';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }
}
exports.Migrations1765264081067 = Migrations1765264081067;
//# sourceMappingURL=1765264081067-migrations.js.map