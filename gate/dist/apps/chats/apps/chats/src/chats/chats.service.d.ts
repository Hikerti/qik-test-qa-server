import { PaginationDTO } from '@shared';
import { ChatsDTO, ChatsRepository } from '@domains';
import { AuthPayload } from '@systems';
export declare class ChatsService {
    private readonly chatsRepository;
    constructor(chatsRepository: ChatsRepository);
    getAllByUser(query: PaginationDTO.Request, authPayload: AuthPayload): Promise<{
        chats: ChatsDTO[];
        pagination: PaginationDTO.Response;
    }>;
    findById(params: {
        id: string;
    }): Promise<{
        chat: ChatsDTO;
    } | null>;
    create(body: ChatsDTO.Create, authPayload: AuthPayload): Promise<{
        chat: ChatsDTO;
    }>;
    update(params: {
        id: string;
    }, body: ChatsDTO.Update): Promise<{
        chat: ChatsDTO;
    }>;
    delete(params: {
        id: string;
    }): Promise<{
        deleted: boolean;
    }>;
}
