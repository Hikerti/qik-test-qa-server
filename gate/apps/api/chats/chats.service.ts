import { PaginationDTO } from '@shared';
import { ChatsDTO, ChatsRepository } from '@domains';
import { AuthPayload } from '@systems';
import {
  CreateChatContract,
  DeleteChatContract,
  FindByIdChatContract,
  GetAllByUserChatsContract,
  UpdateChatContract,
} from './contracts';

export class ChatsService {
  constructor(private readonly chatsRepository: ChatsRepository) {}

  async getAllByUser(
    query: GetAllByUserChatsContract.RequestQuery,
    authPayload: AuthPayload,
  ): Promise<GetAllByUserChatsContract.ResponsePayload> {
    const { limit, page } = query;
    const { chats, total_count } = await this.chatsRepository.getAllByUser(
      authPayload.owner.id,
      query,
    );

    const total_pages = Math.ceil(total_count / limit);
    const is_last_page = page >= total_pages;
    const items_count = chats.length;

    const paginationResponse: PaginationDTO.Response = {
      page: page,
      total_pages: total_pages,
      items_count: items_count,
      is_last_page: is_last_page,
    };

    return {
      chats: chats,
      pagination: paginationResponse,
    };
  }

  async findById(
    params: FindByIdChatContract.RequestParams,
  ): Promise<FindByIdChatContract.ResponsePayload | null> {
    const model = await this.chatsRepository.findById(params.id);
    return { chat: ChatsDTO.fromModel(model) };
  }

  async create(
    body: CreateChatContract.RequestBody,
    authPayload: AuthPayload,
  ): Promise<CreateChatContract.ResponsePayload> {
    const model = await this.chatsRepository.create(authPayload.owner.id, body);
    return { chat: ChatsDTO.fromModel(model) };
  }

  async update(
    params: UpdateChatContract.RequestParams,
    body: UpdateChatContract.RequestBody,
  ): Promise<UpdateChatContract.ResponsePayload> {
    const model = await this.chatsRepository.update(params.id, body);
    return { chat: ChatsDTO.fromModel(model) };
  }

  async delete(
    params: DeleteChatContract.RequestParams,
  ): Promise<DeleteChatContract.ResponsePayload> {
    const model = await this.chatsRepository.delete(params.id);
    return { deleted: model };
  }
}
