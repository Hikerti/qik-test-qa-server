import { HttpContractData, PaginationDTO } from '@shared';
import { MessagesDTO } from '@domains';
export declare namespace GetAllByChatMessageContract {
    const method = HttpContractData.Method.Get;
    const path = ":chatId/all";
    const name = "GetAllByChat";
    const description = "Get messages by chat";
    class RequestQuery extends PaginationDTO.Request {
    }
    class RequestParams {
        chatId: string;
    }
    class ResponsePayload {
        messages: MessagesDTO[];
        pagination: PaginationDTO.Response;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
