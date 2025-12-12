import { Repository } from 'typeorm';
import { PaginationDTO } from '@shared';
import { User } from './user.entities';
import { UserDTO } from './user.dto';
export declare class UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getAll(query: PaginationDTO.Request): Promise<{
        users: User[];
        total_count: number;
    }>;
    findById(id: string): Promise<User | null>;
    update(id: string, body: UserDTO.Update): Promise<User>;
}
