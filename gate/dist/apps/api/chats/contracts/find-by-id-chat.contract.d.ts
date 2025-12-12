import { HttpContractData } from '@shared';
import { ChatsDTO } from '@domains';
export declare namespace FindByIdChatContract {
    const method = HttpContractData.Method.Get;
    const path = ":id";
    const name = "FindById";
    const description = "Find chat by id";
    class RequestParams {
        id: string;
    }
    class ResponsePayload {
        chat: ChatsDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
