import { HttpContractData } from '@shared';
import { UserDTO } from '@domains';
export declare namespace FindUserContract {
    const method = HttpContractData.Method.Get;
    const path = ":userId";
    const name = "FindOne";
    const description = "Finds user by id";
    class RequestParams {
        userId: string;
    }
    class ResponsePayload {
        user: UserDTO;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
