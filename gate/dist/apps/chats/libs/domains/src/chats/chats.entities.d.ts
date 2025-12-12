import { User } from '../user';
import { Messages } from '../messages';
export declare class Chats {
    id: string;
    title: string;
    createdAt: Date;
    user: User;
    userId: string;
    messages: Messages[];
}
