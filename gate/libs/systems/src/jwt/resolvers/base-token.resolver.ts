import { ConfigService } from '@nestjs/config';
import { ConfigSchema } from '@infrastructure/config';

export class BaseTokenResolver {
  constructor(protected readonly config: ConfigService<ConfigSchema.Scope.JWT>) {}
}
