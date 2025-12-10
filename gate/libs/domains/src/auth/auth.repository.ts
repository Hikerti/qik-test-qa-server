import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserDTO } from '../user';
import { UserAuthMethod, UserAuthType } from '../user-auth-method';

export class AuthRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserAuthMethod)
    private readonly authMethodRepository: Repository<UserAuthMethod>,
  ) {}

  async login(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: ['authMethods'],
    });

    if (!user) {
      return null;
    }

    return user;
  }

  async register(body: UserDTO.Register): Promise<User | null> {
    const existingUser = await this.userRepository.findOne({
      where: { email: body.email },
    });

    if (existingUser) {
      return null;
    }

    const newUser = this.userRepository.create({
      ...body,
    });

    return await this.userRepository.save(newUser);
  }

  async createAuthMethod(
    userId: string,
    hashedPassword: string,
  ): Promise<void> {
    const authMethod = this.authMethodRepository.create({
      type: UserAuthType.PASSWORD,
      reference: hashedPassword,
      userId,
    });
    await this.authMethodRepository.save(authMethod);
  }
}
