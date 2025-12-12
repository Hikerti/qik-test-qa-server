import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AiService {
  constructor(@Inject('AI_SERVICE') private readonly aiClient: ClientProxy) {}

  async generate() {
    return this.aiClient.send('ai.generate', {}).toPromise();
  }

  async push() {
    return this.aiClient.send('ai.push', {}).toPromise();
  }
}
