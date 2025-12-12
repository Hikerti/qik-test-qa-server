import { HttpContractData } from '@shared';
import { JWTGuardOptions } from '@systems';
export declare namespace RefreshContract {
    const method = HttpContractData.Method.Put;
    const path = "refresh";
    const name = "Refresh";
    const description = "Refreshes user";
    const jwt: JWTGuardOptions;
    class RequestBody {
    }
    class ResponsePayload {
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
