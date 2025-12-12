"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPasswordToUser1765264072519 = void 0;
class AddPasswordToUser1765264072519 {
    constructor() {
        this.name = 'AddPasswordToUser1765264072519';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }
}
exports.AddPasswordToUser1765264072519 = AddPasswordToUser1765264072519;
//# sourceMappingURL=1765264072519-AddPasswordToUser.js.map