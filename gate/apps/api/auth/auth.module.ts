import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PasswordService } from '@infractract';
import { AuthRepository } from '@domains';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PasswordService, AuthRepository],
})
export class AuthModule {}
