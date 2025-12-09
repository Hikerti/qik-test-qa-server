import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDTO } from '@shared';
import { User } from './user.entities';
import { UserDTO } from './user.dto';

export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAll(
    query: PaginationDTO.Request,
  ): Promise<{ users: User[]; total_count: number }> {
    const { page, limit } = query;
    const skip = (page - 1) * limit;

    const [users, total_count] = await this.userRepository.findAndCount({
      take: limit,
      skip: skip,
      order: { createdAt: 'DESC' },
    });

    return {
      users: users,
      total_count,
    };
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    return user;
  }

  async update(id: string, body: UserDTO.Update): Promise<User> {
    const chat = await this.findById(id);
    const updatedChat = Object.assign(chat, body);
    return this.userRepository.save(updatedChat);
  }
}
