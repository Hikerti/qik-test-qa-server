import { HttpContractData, PaginationDTO } from '@shared';
import { UserDTO } from '@domains';
export declare namespace GetUsersListContract {
    const method = HttpContractData.Method.Get;
    const path = "/all";
    const name = "GetList";
    const description = "Returns list of users";
    class RequestQuery extends PaginationDTO.Request {
    }
    class ResponsePayload {
        users: UserDTO[];
        pagination: PaginationDTO.Response;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
