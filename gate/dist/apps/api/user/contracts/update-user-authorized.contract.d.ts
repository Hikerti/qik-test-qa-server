import { HttpContractData } from '@shared';
import { UserDTO } from '@domains';
import { JWTGuardOptions } from '@systems';
export declare namespace UpdateAuthorizeUserContract {
    const method = HttpContractData.Method.Put;
    const path = "authorized";
    const name = "Update";
    const description = "Updates authorized user";
    const jwt: JWTGuardOptions;
    class RequestBody extends UserDTO.Update {
    }
    class ResponsePayload {
        user: UserDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
