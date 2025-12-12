import { HttpContractData } from '@shared';
import { MessagesDTO } from '@domains';
export declare namespace UpdateMessageContract {
    const method = HttpContractData.Method.Put;
    const path = ":id";
    const name = "Update";
    const description = "Creates message by chat";
    class RequestParams {
        id: string;
    }
    class RequestBody extends MessagesDTO.Update {
    }
    class ResponsePayload {
        message: MessagesDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
