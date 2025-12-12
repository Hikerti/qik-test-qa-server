import { UserDTO } from '@domains';
import { HttpContractData } from '@shared';
export declare namespace LoginContract {
    const method = HttpContractData.Method.Post;
    const path = "login";
    const name = "Login";
    const description = "Logins user";
    class RequestBody extends UserDTO.Login {
    }
    class ResponsePayload {
        user: UserDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
