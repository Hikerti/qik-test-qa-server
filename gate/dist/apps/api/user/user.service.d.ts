import { AuthPayload } from '@systems';
import { GetUsersListContract, FindUserContract, GetAuthorizedUserContract, UpdateUserContract, UpdateAuthorizeUserContract } from './contracts';
import { ClientProxy } from '@nestjs/microservices';
export declare class UserService {
    private readonly userClient;
    constructor(userClient: ClientProxy);
    getList(query: GetUsersListContract.RequestQuery): Promise<GetUsersListContract.ResponsePayload>;
    findById(params: FindUserContract.RequestParams): Promise<FindUserContract.ResponsePayload>;
    findAuthorized(auth: AuthPayload): Promise<GetAuthorizedUserContract.ResponsePayload>;
    updateById(params: UpdateUserContract.RequestParams, body: UpdateUserContract.RequestBody): Promise<UpdateUserContract.ResponsePayload>;
    updateAuthorized(auth: AuthPayload, body: UpdateAuthorizeUserContract.RequestBody): Promise<UpdateAuthorizeUserContract.ResponsePayload>;
}
