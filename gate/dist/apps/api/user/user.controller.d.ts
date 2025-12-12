import { AuthPayload } from '@systems';
import { UserService } from './user.service';
import { GetUsersListContract, FindUserContract, GetAuthorizedUserContract, UpdateUserContract, UpdateAuthorizeUserContract } from './contracts';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getList(query: GetUsersListContract.RequestQuery): Promise<GetUsersListContract.ResponsePayload>;
    findById(params: FindUserContract.RequestParams): Promise<FindUserContract.ResponsePayload>;
    findAuthorized(auth: AuthPayload): Promise<GetAuthorizedUserContract.ResponsePayload>;
    updateById(params: UpdateUserContract.RequestParams, body: UpdateUserContract.RequestBody): Promise<UpdateUserContract.ResponsePayload>;
    updateAuthorized(body: UpdateAuthorizeUserContract.RequestBody, auth: AuthPayload): Promise<UpdateAuthorizeUserContract.ResponsePayload>;
}
