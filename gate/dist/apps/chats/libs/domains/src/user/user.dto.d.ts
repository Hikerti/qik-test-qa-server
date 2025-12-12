import { Theme, User } from '@domains';
export declare class UserDTO {
    id: string;
    name: string;
    email: string;
    gitHubId?: string;
    theme: Theme;
    createdAt: Date;
    lastSentAt: Date;
    static fromModel(model: User): UserDTO;
}
export declare namespace UserDTO {
    const Update_base: import("@nestjs/common").Type<Partial<Omit<UserDTO, "id" | "createdAt">>>;
    export class Update extends Update_base {
    }
    const Register_base: import("@nestjs/common").Type<Pick<UserDTO, "name" | "email">>;
    export class Register extends Register_base {
        password: string;
    }
    const Login_base: import("@nestjs/common").Type<Pick<UserDTO, "email">>;
    export class Login extends Login_base {
        password: string;
    }
    export {};
}
