import { Module } from '@nestjs/common';
import { ConfigProvider } from '@infractract';

@Module({
  imports: [ConfigProvider.forRoot(['database', 's3'], 'gate')],
})
export class AppModule {}
