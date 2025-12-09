import { Module } from '@nestjs/common';
import { MessagesRepository } from '@domains';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
  providers: [MessagesService, MessagesRepository],
  controllers: [MessagesController],
})

export class MessagesModule {}