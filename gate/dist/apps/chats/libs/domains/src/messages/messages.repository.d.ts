import { Repository } from 'typeorm';
import { PaginationDTO } from '@shared';
import { Messages, SenderType } from './messages.entities';
import { MessagesDTO } from './messages.dto';
export declare class MessagesRepository {
    private readonly messagesRepository;
    constructor(messagesRepository: Repository<Messages>);
    getAllByChats(chatId: string, query: PaginationDTO.Request): Promise<{
        messages: Messages[];
        total_count: number;
    }>;
    getAllByChatsAndSender(chatId: string, sender: SenderType, query: PaginationDTO.Request): Promise<{
        messages: Messages[];
        total_count: number;
    }>;
    findById(id: string): Promise<Messages | null>;
    create(chatId: string, body: MessagesDTO.Create): Promise<Messages>;
    update(id: string, body: MessagesDTO.Update): Promise<Messages>;
    delete(id: string): Promise<boolean>;
}
