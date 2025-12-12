import { HttpContractData } from '@shared';
import { ChatsDTO } from '@domains';
export declare namespace UpdateChatContract {
    const method = HttpContractData.Method.Put;
    const path = ":id";
    const name = "Update";
    const description = "Creates chat by chat";
    class RequestParams {
        id: string;
    }
    class RequestBody extends ChatsDTO.Update {
    }
    class ResponsePayload {
        chat: ChatsDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
