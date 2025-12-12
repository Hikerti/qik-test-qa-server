import { HttpContractData } from '@shared';
import { MessagesDTO } from '@domains';
export declare namespace FindByIdMessageContract {
    const method = HttpContractData.Method.Get;
    const path = ":id";
    const name = "FindById";
    const description = "Find message by id";
    class RequestParams {
        id: string;
    }
    class ResponsePayload {
        message: MessagesDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
