import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthRepository, UserDTO } from '@domains';
import { PasswordService, HttpError } from '@infractract';
import { JwtService } from '@systems';
import { FastifyReply } from 'fastify';

const mockUser = {
  id: 'user-uuid',
  name: 'Test User',
  email: 'test@test.com',
  createdAt: new Date(),
  lastSentAt: new Date(),
  authMethods: [{ type: 'password', reference: 'hashed_password' }],
};

const mockTokens = {
  access: 'access_token_string',
  refresh: 'refresh_token_string',
};

describe('AuthService', () => {
  let service: AuthService;
  let authRepository: AuthRepository;
  let passwordService: PasswordService;
  let jwtService: JwtService;

  const mockFastifyReply = {
    setCookie: jest.fn(),
    clearCookie: jest.fn(),
  } as unknown as FastifyReply;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: AuthRepository,
          useValue: {
            register: jest.fn(),
            createAuthMethod: jest.fn(),
            login: jest.fn(),
          },
        },
        {
          provide: PasswordService,
          useValue: {
            hashPassword: jest.fn().mockResolvedValue('hashed_password'),
            checkPassword: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAuthTokens: jest.fn().mockReturnValue(mockTokens),
            getMaxAge: jest.fn().mockReturnValue(1000),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    authRepository = module.get<AuthRepository>(AuthRepository);
    passwordService = module.get<PasswordService>(PasswordService);
    jwtService = module.get<JwtService>(JwtService);

    jest.clearAllMocks();
  });

  describe('register', () => {
    const registerDto = {
      name: 'Test',
      email: 'test@test.com',
      password: '123',
    };

    it('should successfully register a user', async () => {
      (authRepository.register as jest.Mock).mockResolvedValue(mockUser);

      const result = await service.register(mockFastifyReply, registerDto);

      expect(passwordService.hashPassword).toHaveBeenCalledWith(
        registerDto.password,
      );
      expect(authRepository.register).toHaveBeenCalled();
      expect(authRepository.createAuthMethod).toHaveBeenCalledWith(
        mockUser.id,
        'hashed_password',
      );
      expect(jwtService.signAuthTokens).toHaveBeenCalledWith({
        owner: { id: mockUser.id },
      });

      expect(mockFastifyReply.setCookie).toHaveBeenCalledTimes(2);

      expect(result.user).toEqual(UserDTO.fromModel(mockUser as any));
    });

    it('should throw error if user registration fails', async () => {
      (authRepository.register as jest.Mock).mockResolvedValue(null);
    });
  });

  describe('login', () => {
    const loginDto = { email: 'test@test.com', password: '123' };

    it('should successfully login', async () => {
      (authRepository.login as jest.Mock).mockResolvedValue(mockUser);
      (passwordService.checkPassword as jest.Mock).mockResolvedValue(true);

      const result = await service.login(mockFastifyReply, loginDto);

      expect(authRepository.login).toHaveBeenCalledWith(loginDto.email);
      expect(passwordService.checkPassword).toHaveBeenCalledWith(
        '123',
        'hashed_password',
      );
      expect(mockFastifyReply.setCookie).toHaveBeenCalledTimes(2);
      expect(result.user).toEqual(UserDTO.fromModel(mockUser as any));
    });

    it('should throw 404 if user not found', async () => {
      (authRepository.login as jest.Mock).mockResolvedValue(null);
    });

    it('should throw 401 if password is wrong', async () => {
      (authRepository.login as jest.Mock).mockResolvedValue(mockUser);
      (passwordService.checkPassword as jest.Mock).mockResolvedValue(false);
    });
  });

  describe('logout', () => {
    it('should clear cookies', async () => {
      await service.logout(mockFastifyReply);
      expect(mockFastifyReply.clearCookie).toHaveBeenCalledTimes(2);
    });
  });
});
