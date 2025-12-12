import { ChatsService } from './chats.service';
import { AuthPayload } from '@systems';
import { FindByIdChatContract, GetAllByUserChatsContract, CreateChatContract, UpdateChatContract, DeleteChatContract } from './contracts';
export declare class ChatsController {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    getAllByUser(query: GetAllByUserChatsContract.RequestQuery, authPayload: AuthPayload): Promise<GetAllByUserChatsContract.ResponsePayload>;
    findById(params: FindByIdChatContract.RequestParams): Promise<FindByIdChatContract.ResponsePayload>;
    create(body: CreateChatContract.RequestBody, authPayload: AuthPayload): Promise<CreateChatContract.ResponsePayload>;
    update(params: UpdateChatContract.RequestParams, body: UpdateChatContract.RequestBody): Promise<UpdateChatContract.ResponsePayload>;
    delete(params: DeleteChatContract.RequestParams): Promise<DeleteChatContract.ResponsePayload>;
}
