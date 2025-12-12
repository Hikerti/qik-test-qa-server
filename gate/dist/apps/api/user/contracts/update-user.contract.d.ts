import { HttpContractData } from '@shared';
import { UserDTO } from '@domains';
import { JWTGuardOptions } from '@systems';
export declare namespace UpdateUserContract {
    const method = HttpContractData.Method.Patch;
    const path = ":userId";
    const name = "Update";
    const description = "Updates authorized user";
    const jwt: JWTGuardOptions;
    class RequestParams {
        userId: string;
    }
    class RequestBody extends UserDTO.Update {
    }
    class ResponsePayload {
        user: UserDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
