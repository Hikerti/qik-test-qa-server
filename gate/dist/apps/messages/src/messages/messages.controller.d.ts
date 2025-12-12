import { MessagesService } from './messages.service';
import { PaginationDTO } from '@shared';
import { MessagesDTO, SenderType } from '@domains';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    getAllByChats(data: {
        query: PaginationDTO.Request;
        params: {
            chatId: string;
        };
    }): Promise<{
        messages: MessagesDTO[];
        pagination: PaginationDTO.Response;
    }>;
    getAllByChatsAndSender(data: {
        query: PaginationDTO.Request & {
            sender: SenderType;
        };
        params: {
            chatId: string;
        };
    }): Promise<{
        messages: MessagesDTO[];
        pagination: PaginationDTO.Response;
    }>;
    findById(params: {
        id: string;
    }): Promise<{
        message: MessagesDTO;
    }>;
    create(data: {
        params: {
            chatId: string;
        };
        body: MessagesDTO.Create;
    }): Promise<{
        message: MessagesDTO;
    }>;
    update(data: {
        params: {
            id: string;
        };
        body: MessagesDTO.Create;
    }): Promise<{
        message: MessagesDTO;
    }>;
    delete(data: {
        params: {
            id: string;
        };
    }): Promise<{
        deleted: boolean;
    }>;
}
