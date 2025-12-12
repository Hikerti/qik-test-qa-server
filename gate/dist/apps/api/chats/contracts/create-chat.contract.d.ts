import { HttpContractData } from '@shared';
import { ChatsDTO } from '@domains';
import { JWTGuardOptions } from '@systems';
export declare namespace CreateChatContract {
    const method = HttpContractData.Method.Post;
    const path = "";
    const name = "Create";
    const description = "Creates chat by chat";
    const jwt: JWTGuardOptions;
    class RequestBody extends ChatsDTO.Create {
    }
    class ResponsePayload {
        chat: ChatsDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
