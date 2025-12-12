import { MessagesDTO, MessagesRepository, SenderType } from '@domains';
import { PaginationDTO } from '@shared';
export declare class MessagesService {
    private readonly messagesRepository;
    constructor(messagesRepository: MessagesRepository);
    getAllByChats(query: PaginationDTO.Request, params: {
        chatId: string;
    }): Promise<{
        messages: MessagesDTO[];
        pagination: PaginationDTO.Response;
    }>;
    getAllByChatsAndSender(query: PaginationDTO.Request & {
        sender: SenderType;
    }, params: {
        chatId: string;
    }): Promise<{
        messages: MessagesDTO[];
        pagination: PaginationDTO.Response;
    }>;
    findById(params: {
        id: string;
    }): Promise<{
        message: MessagesDTO;
    } | null>;
    create(params: {
        chatId: string;
    }, body: MessagesDTO.Create): Promise<{
        message: MessagesDTO;
    }>;
    update(params: {
        id: string;
    }, body: MessagesDTO.Update): Promise<{
        message: MessagesDTO;
    }>;
    delete(params: {
        id: string;
    }): Promise<{
        deleted: boolean;
    }>;
}
