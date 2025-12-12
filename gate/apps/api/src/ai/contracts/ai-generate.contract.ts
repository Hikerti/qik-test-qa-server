import { ApiProperty } from '@nestjs/swagger';

import { ApiSchemaName, HttpContractData, HttpResponseBody } from '@shared';
import { AiContract } from './ai.contact';
import { AiDTO } from '@domains';

export namespace AiGenerateContract {
  export const method = HttpContractData.Method.Post;
  export const path = '';
  export const name = 'Create';
  export const description = 'Creates chat by chat';

  @ApiSchemaName(`${AiContract.name}${name}RequestBody`)
  export class RequestBody extends AiDTO.Generate {}

  @ApiSchemaName(`${AiContract.name}${name}ResponsePayload`)
  export class ResponsePayload {
    @ApiProperty()
    content: string;
  }

  export const ResponseBody = HttpResponseBody(ResponsePayload);
}
