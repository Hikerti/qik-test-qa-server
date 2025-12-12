import { HttpContractData } from '@shared';
import { JWTGuardOptions } from '@systems';
export declare namespace LogoutContract {
    const method = HttpContractData.Method.Delete;
    const path = "logout";
    const name = "Logout";
    const description = "Logouts user";
    const jwt: JWTGuardOptions;
    class RequestBody {
    }
    class ResponsePayload {
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
