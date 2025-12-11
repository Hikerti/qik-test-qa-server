import { ApplyHttpControllerContract, ApplyHttpMethodContract } from '@shared';
import { AiContract, AiGenerateContract, AiPushContract } from './contracts';
import { AiService } from './ai.service';

@ApplyHttpControllerContract(AiContract)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @ApplyHttpMethodContract(AiGenerateContract)
  async generate() {
    return this.aiService.generate();
  }

  @ApplyHttpMethodContract(AiPushContract)
  async push() {
    return this.aiService.push();
  }
}
