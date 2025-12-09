import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';
import { UserModule } from './user/user.module';
import { Chats, Messages, User, UserAuthMethod } from '@domains';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserAuthMethod, Chats, Messages]),
    AuthModule,
    ChatsModule,
    MessagesModule,
    UserModule,
  ],
  providers: [],
  exports: [AuthModule],
})
export class ApiModule {}
