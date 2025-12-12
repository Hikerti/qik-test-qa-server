import { HttpContractData } from '@shared';
import { MessagesDTO } from '@domains';
export declare namespace CreateMessageContract {
    const method = HttpContractData.Method.Post;
    const path = ":chatId";
    const name = "Create";
    const description = "Creates message by chat";
    class RequestParams {
        chatId: string;
    }
    class RequestBody extends MessagesDTO.Create {
    }
    class ResponsePayload {
        message: MessagesDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
