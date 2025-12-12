import { User } from '../user';
export declare enum UserAuthType {
    YANDEX = "yandex",
    VK = "vk",
    PASSWORD = "password"
}
export declare class UserAuthMethod {
    id: string;
    type: UserAuthType;
    reference: string;
    user: User;
    userId: string;
}
