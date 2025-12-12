import { Chats } from '@domains';
export declare class ChatsDTO {
    id: string;
    title: string;
    createdAt: Date;
    static fromModel(model: Chats): ChatsDTO;
}
export declare namespace ChatsDTO {
    const Create_base: import("@nestjs/common").Type<Omit<ChatsDTO, "id" | "createdAt">>;
    export class Create extends Create_base {
    }
    const Update_base: import("@nestjs/common").Type<Partial<Create>>;
    export class Update extends Update_base {
    }
    export {};
}
