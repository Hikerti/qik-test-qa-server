import { Repository } from 'typeorm';
import { Chats } from './chats.entities';
import { ChatsDTO } from './chats.dto';
import { PaginationDTO } from '@shared';
export declare class ChatsRepository {
    private readonly chatsRepository;
    constructor(chatsRepository: Repository<Chats>);
    getAllByUser(userId: string, query: PaginationDTO.Request): Promise<{
        chats: Chats[];
        total_count: number;
    }>;
    findById(id: string): Promise<Chats | null>;
    findByUser(userId: string): Promise<Chats>;
    create(userId: string, body: ChatsDTO.Create): Promise<Chats>;
    update(id: string, body: ChatsDTO.Update): Promise<Chats>;
    delete(id: string): Promise<boolean>;
}
