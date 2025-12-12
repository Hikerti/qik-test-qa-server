import { HttpContractData, PaginationDTO } from '@shared';
import { MessagesDTO, SenderType } from '@domains';
export declare namespace GetAllByChatAndSenderMessageContract {
    const method = HttpContractData.Method.Get;
    const path = "sender/:chatId/all";
    const name = "GetAllByChatAndSender";
    const description = "Get messages by chat and sender";
    class RequestQuery extends PaginationDTO.Request {
        sender: SenderType;
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
