import { HttpContractData } from '@shared';
export declare namespace DeleteMessageContract {
    const method = HttpContractData.Method.Delete;
    const path = ":id";
    const name = "Delete";
    const description = "Deleted message";
    class RequestParams {
        id: string;
    }
    class ResponsePayload {
        deleted: boolean;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
