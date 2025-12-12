import { Repository } from 'typeorm';
import { User, UserDTO } from '../user';
import { UserAuthMethod } from '../user-auth-method';
export declare class AuthRepository {
    private readonly userRepository;
    private readonly authMethodRepository;
    constructor(userRepository: Repository<User>, authMethodRepository: Repository<UserAuthMethod>);
    login(email: string): Promise<User | null>;
    register(body: UserDTO.Register): Promise<User | null>;
    createAuthMethod(userId: string, hashedPassword: string): Promise<void>;
}
