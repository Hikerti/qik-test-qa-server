import { FastifyReply } from 'fastify';
import { AuthPayload } from '@systems';
import { AuthService } from './auth.service';
import { LoginContract, LogoutContract, RegisterContract } from './contracts';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(res: FastifyReply, body: RegisterContract.RequestBody): Promise<RegisterContract.ResponsePayload>;
    login(res: FastifyReply, body: LoginContract.RequestBody): Promise<LoginContract.ResponsePayload>;
    refresh(res: FastifyReply, authPayload: AuthPayload): Promise<LogoutContract.ResponsePayload>;
    logout(res: FastifyReply): Promise<LogoutContract.ResponsePayload>;
}
