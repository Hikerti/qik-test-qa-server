import { JWTGuardOptions } from '@systems';
import { UserDTO } from '@domains';
import { HttpContractData } from '@shared';
export declare namespace GetAuthorizedUserContract {
    const method = HttpContractData.Method.Get;
    const path = "authorized";
    const name = "GetAuthorized";
    const description = "Returns authorized user";
    const jwt: JWTGuardOptions;
    class ResponsePayload {
        user: UserDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
