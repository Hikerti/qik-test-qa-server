import { HttpContractData } from '@shared';
export declare namespace DeleteChatContract {
    const method = HttpContractData.Method.Delete;
    const path = ":id";
    const name = "Delete";
    const description = "Deleted chat";
    class RequestParams {
        id: string;
    }
    class ResponsePayload {
        deleted: boolean;
    }
    const ResponseBody: import("@nestjs/common").Type<import("../../../../libs/infractract/src").HttpResponse<ResponsePayload>>;
}
