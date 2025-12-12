import { UserDTO } from '@domains';
import { HttpContractData } from '@shared';
export declare namespace RegisterContract {
    const method = HttpContractData.Method.Post;
    const path = "register";
    const name = "Register";
    const description = "Registers user";
    class RequestBody extends UserDTO.Register {
    }
    class ResponsePayload {
        user: UserDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
