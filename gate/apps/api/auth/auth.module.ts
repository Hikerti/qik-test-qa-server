import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PasswordService } from '@infractract';
import { AuthRepository, User, UserAuthMethod } from '@domains';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserAuthMethod])],
  controllers: [AuthController],
  providers: [AuthService, PasswordService, AuthRepository],
})
export class AuthModule {}
