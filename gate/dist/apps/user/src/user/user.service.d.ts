import { AuthPayload } from '@systems';
import { UserDTO, UserRepository } from '@domains';
import { PaginationDTO } from '@shared';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getList(query: PaginationDTO.Request): Promise<{
        users: UserDTO[];
        pagination: PaginationDTO.Response;
    }>;
    findById(params: {
        userId: string;
    }): Promise<{
        user: UserDTO;
    }>;
    findAuthorized(auth: AuthPayload): Promise<{
        user: UserDTO;
    }>;
    updateById(params: {
        userId: string;
    }, body: UserDTO.Update): Promise<{
        user: UserDTO;
    }>;
    updateAuthorized(auth: AuthPayload, body: UserDTO.Update): Promise<{
        user: UserDTO;
    }>;
}
