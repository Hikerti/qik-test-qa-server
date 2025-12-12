import { UserService } from './user.service';
import { AuthPayload } from '@systems';
import { PaginationDTO } from '@shared';
import { UserDTO } from '@domains';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(data: {
        query: PaginationDTO.Request;
    }): Promise<{
        users: UserDTO[];
        pagination: PaginationDTO.Response;
    }>;
    findById(params: {
        userId: string;
    }): Promise<{
        user: UserDTO;
    }>;
    findAuthorize(authPayload: AuthPayload): Promise<{
        user: UserDTO;
    }>;
    update(data: {
        params: {
            userId: string;
        };
        body: UserDTO.Update;
    }): Promise<{
        user: UserDTO;
    }>;
    updateAuthorize(data: {
        authPayload: AuthPayload;
        body: UserDTO.Update;
    }): Promise<{
        user: UserDTO;
    }>;
}
