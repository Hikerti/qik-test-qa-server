import { ChatsService } from './chats.service';
import { AuthPayload } from '@systems';
import { PaginationDTO } from '@shared';
import { ChatsDTO } from '@domains';
export declare class ChatsController {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    getAllByUser(data: {
        query: PaginationDTO.Request;
        authPayload: AuthPayload;
    }): Promise<{
        chats: ChatsDTO[];
        pagination: PaginationDTO.Response;
    }>;
    findById(params: {
        id: string;
    }): Promise<{
        chat: ChatsDTO;
    }>;
    create(data: {
        body: ChatsDTO.Create;
        authPayload: AuthPayload;
    }): Promise<{
        chat: ChatsDTO;
    }>;
    update(data: {
        params: {
            id: string;
        };
        body: ChatsDTO.Update;
    }): Promise<{
        chat: ChatsDTO;
    }>;
    delete(data: {
        params: {
            id: string;
        };
    }): Promise<{
        deleted: boolean;
    }>;
}
