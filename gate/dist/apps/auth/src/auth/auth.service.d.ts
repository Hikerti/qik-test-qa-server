import { AuthPayload, JwtService } from '@systems';
import { FastifyReply } from 'fastify';
import { AuthRepository, UserDTO } from '@domains';
import { PasswordService } from '@infractract';
export declare class AuthService {
    private readonly password;
    private readonly jwt;
    private readonly authRepository;
    constructor(password: PasswordService, jwt: JwtService, authRepository: AuthRepository);
    register(res: FastifyReply, body: UserDTO.Register): Promise<{
        user: UserDTO;
    }>;
    login(res: FastifyReply, body: UserDTO.Login): Promise<{
        user: UserDTO;
    }>;
    refresh(res: FastifyReply, authPayload: AuthPayload): Promise<{}>;
    logout(res: FastifyReply): Promise<{}>;
    private enrichRequestWithTokenCookie;
    private clearRequestTokenCookie;
}
