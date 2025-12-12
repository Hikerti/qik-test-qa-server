import { AuthPayload, JwtService } from '@systems';
import { FastifyReply } from 'fastify';
import { AuthRepository } from '@domains';
import { PasswordService } from '@infractract';
import { LoginContract, LogoutContract, RefreshContract, RegisterContract } from './contracts';
export declare class AuthService {
    private readonly password;
    private readonly jwt;
    private readonly authRepository;
    constructor(password: PasswordService, jwt: JwtService, authRepository: AuthRepository);
    register(res: FastifyReply, body: RegisterContract.RequestBody): Promise<RegisterContract.ResponsePayload>;
    login(res: FastifyReply, body: LoginContract.RequestBody): Promise<LoginContract.ResponsePayload>;
    refresh(res: FastifyReply, authPayload: AuthPayload): Promise<RefreshContract.ResponsePayload>;
    logout(res: FastifyReply): Promise<LogoutContract.ResponsePayload>;
    private enrichRequestWithTokenCookie;
    private clearRequestTokenCookie;
}
