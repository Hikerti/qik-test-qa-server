import { MessagesService } from './messages.service';
import { CreateMessageContract, DeleteMessageContract, FindByIdMessageContract, GetAllByChatMessageContract, GetAllByChatAndSenderMessageContract, UpdateMessageContract } from './contracts';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    getAllByChats(query: GetAllByChatMessageContract.RequestQuery, params: GetAllByChatMessageContract.RequestParams): Promise<GetAllByChatMessageContract.ResponsePayload>;
    getAllByChatsAndSender(query: GetAllByChatAndSenderMessageContract.RequestQuery, params: GetAllByChatAndSenderMessageContract.RequestParams): Promise<GetAllByChatAndSenderMessageContract.ResponsePayload>;
    findById(params: FindByIdMessageContract.RequestParams): Promise<FindByIdMessageContract.ResponsePayload>;
    create(params: CreateMessageContract.RequestParams, body: CreateMessageContract.RequestBody): Promise<CreateMessageContract.ResponsePayload>;
    update(params: UpdateMessageContract.RequestParams, body: UpdateMessageContract.RequestBody): Promise<UpdateMessageContract.ResponsePayload>;
    delete(params: DeleteMessageContract.RequestParams): Promise<DeleteMessageContract.ResponsePayload>;
}
