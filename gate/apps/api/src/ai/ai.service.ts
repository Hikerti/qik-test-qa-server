import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AiService {
  constructor(
    @Inject('AI_API_NATS_SERVERS') private readonly aiClient: ClientProxy,
  ) {}

  async generate() {
    return this.aiClient.send('ai.generate_tests', {}).toPromise();
  }

  async push() {
    return this.aiClient.send('ai.cicd.commit_push', {}).toPromise();
  }
}
