"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
const config = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: true,
    entities: ['libs/domains/**/*.entities.ts'],
    migrations: ['apps/migrations/*.ts'],
    migrationsTableName: 'typeorm_migrations',
};
exports.AppDataSource = new typeorm_1.DataSource(config);
exports.default = config;
//# sourceMappingURL=ormconfig.js.map