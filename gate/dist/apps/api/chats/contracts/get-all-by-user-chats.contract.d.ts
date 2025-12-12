import { HttpContractData, PaginationDTO } from '@shared';
import { JWTGuardOptions } from '@systems';
import { ChatsDTO } from '@domains';
export declare namespace GetAllByUserChatsContract {
    const method = HttpContractData.Method.Get;
    const path = "/all";
    const name = "GetAllByChat";
    const description = "Get messages by chat";
    const jwt: JWTGuardOptions;
    class RequestQuery extends PaginationDTO.Request {
    }
    class ResponsePayload {
        chats: ChatsDTO[];
        pagination: PaginationDTO.Response;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
