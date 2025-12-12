import { Messages, SenderType } from '@domains';
export declare class MessagesDTO {
    id: string;
    content: string;
    sender: SenderType;
    createdAt: Date;
    static fromModel(model: Messages): MessagesDTO;
}
export declare namespace MessagesDTO {
    const Create_base: import("@nestjs/common").Type<Omit<MessagesDTO, "id" | "createdAt">>;
    export class Create extends Create_base {
    }
    const Update_base: import("@nestjs/common").Type<Partial<Create>>;
    export class Update extends Update_base {
    }
    export {};
}
