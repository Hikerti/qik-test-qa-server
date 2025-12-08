import { ApiSchemaName, IdField } from '@contracts';

export namespace ReorderDTO {
  @ApiSchemaName('ReorderRequestDTO')
  export class Request {
    @IdField()
    from_id: string;
    @IdField()
    to_id: string;
  }
}
