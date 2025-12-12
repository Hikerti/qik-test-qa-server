"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvPathFactory = void 0;
const process = require("node:process");
const path = require("path");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class EnvPathFactory {
    static env() {
        return process.env.ENVIRONMENT || 'local';
    }
    static createScopePath(scope) {
        return path.resolve(this.BASE_DIR, 'envs', this.env(), 'scopes', `${scope}.env`);
    }
    static createServicePath(service) {
        return path.resolve(this.BASE_DIR, 'envs', this.env(), 'services', `${service}.env`);
    }
    static create(scopes, service) {
        const paths = scopes.map((s) => this.createScopePath(s));
        if (service) {
            paths.push(this.createServicePath(service));
        }
        return paths;
    }
}
exports.EnvPathFactory = EnvPathFactory;
EnvPathFactory.BASE_DIR = path.resolve(process.cwd(), '..');
//# sourceMappingURL=env-path-factory.js.map