import { Chats } from '../chats';
import { UserAuthMethod } from '../user-auth-method';
export declare enum Theme {
    LIGHT = "light",
    DARK = "dark"
}
export declare class User {
    id: string;
    name: string;
    email: string;
    gitHubId: string;
    theme: Theme;
    createdAt: Date;
    lastSentAt: Date;
    chats: Chats[];
    authMethods: UserAuthMethod[];
}
