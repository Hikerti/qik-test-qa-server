import { AuthService } from './auth.service';
import { FastifyReply } from 'fastify';
import { AuthPayload } from '@systems';
import { UserDTO } from '@domains';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(data: {
        res: FastifyReply;
        body: UserDTO.Register;
    }): Promise<{
        user: UserDTO;
    }>;
    login(data: {
        res: FastifyReply;
        body: UserDTO.Login;
    }): Promise<{
        user: UserDTO;
    }>;
    refresh(data: {
        res: FastifyReply;
        authPayload: AuthPayload;
    }): Promise<{}>;
    logout(data: {
        res: FastifyReply;
    }): Promise<{}>;
}
