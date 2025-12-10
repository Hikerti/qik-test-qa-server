import { Module } from '@nestjs/common';
import { ConfigProvider, LoggerModule } from '@infractract';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Messages, User, Chats, UserAuthMethod } from '@domains';
import { ApiModule } from './api/api.module';
import { JwtModule } from '@systems';
import { TypeormModule } from '../libs/intergations/src';

const ConfigModuleForRoot = ConfigProvider.forRoot(['database', 's3', 'jwt'], 'gate');

@Module({
  imports: [
    ConfigModuleForRoot,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModuleForRoot],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [User, Messages, Chats, UserAuthMethod],
        synchronize: true,
      }),
    }),
    TypeormModule,
    ApiModule,
    LoggerModule,
    JwtModule,
  ],
})
export class AppModule {}
