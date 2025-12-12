import { CreateMessageContract, DeleteMessageContract, FindByIdMessageContract, GetAllByChatAndSenderMessageContract, GetAllByChatMessageContract, UpdateMessageContract } from './contracts';
import { ClientProxy } from '@nestjs/microservices';
export declare class MessagesService {
    private readonly messagesClient;
    constructor(messagesClient: ClientProxy);
    getAllByChats(query: GetAllByChatMessageContract.RequestQuery, params: GetAllByChatMessageContract.RequestParams): Promise<GetAllByChatMessageContract.ResponsePayload>;
    getAllByChatsAndSender(query: GetAllByChatAndSenderMessageContract.RequestQuery, params: GetAllByChatAndSenderMessageContract.RequestParams): Promise<GetAllByChatAndSenderMessageContract.ResponsePayload>;
    findById(params: FindByIdMessageContract.RequestParams): Promise<FindByIdMessageContract.ResponsePayload | null>;
    create(params: CreateMessageContract.RequestParams, body: CreateMessageContract.RequestBody): Promise<CreateMessageContract.ResponsePayload>;
    update(params: UpdateMessageContract.RequestParams, body: UpdateMessageContract.RequestBody): Promise<UpdateMessageContract.ResponsePayload>;
    delete(params: DeleteMessageContract.RequestParams): Promise<DeleteMessageContract.ResponsePayload>;
}
