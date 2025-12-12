import { AuthPayload } from '@systems';
import { CreateChatContract, DeleteChatContract, FindByIdChatContract, GetAllByUserChatsContract, UpdateChatContract } from './contracts';
import { ClientProxy } from '@nestjs/microservices';
export declare class ChatsService {
    private readonly chatsClient;
    constructor(chatsClient: ClientProxy);
    getAllByUser(query: GetAllByUserChatsContract.RequestQuery, authPayload: AuthPayload): Promise<GetAllByUserChatsContract.ResponsePayload>;
    findById(params: FindByIdChatContract.RequestParams): Promise<FindByIdChatContract.ResponsePayload | null>;
    create(body: CreateChatContract.RequestBody, authPayload: AuthPayload): Promise<CreateChatContract.ResponsePayload>;
    update(params: UpdateChatContract.RequestParams, body: UpdateChatContract.RequestBody): Promise<UpdateChatContract.ResponsePayload>;
    delete(params: DeleteChatContract.RequestParams): Promise<DeleteChatContract.ResponsePayload>;
}
