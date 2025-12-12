import { Chats } from '../chats';
export declare enum SenderType {
    USER = "user",
    SENDER = "sender"
}
export declare class Messages {
    id: string;
    content: string;
    sender: SenderType;
    createdAt: Date;
    chat: Chats;
    chatId: string;
}
