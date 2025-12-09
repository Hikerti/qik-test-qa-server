import { Module } from '@nestjs/common';
import { ChatsRepository } from '@domains';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';

@Module({
  providers: [ChatsService, ChatsRepository],
  controllers: [ChatsController],
})
export class ChatsModule {}
