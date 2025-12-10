import { MessagesDTO, MessagesRepository } from '@domains';
import { PaginationDTO } from '@shared';
import {
  CreateMessageContract,
  DeleteMessageContract,
  FindByIdMessageContract,
  GetAllByChatAndSenderMessageContract,
  GetAllByChatMessageContract,
  UpdateMessageContract,
} from './contracts';

export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  async getAllByChats(
    query: GetAllByChatMessageContract.RequestQuery,
    params: GetAllByChatMessageContract.RequestParams,
  ): Promise<GetAllByChatMessageContract.ResponsePayload> {
    const { chatId } = params;
    const { limit, page } = query;
    const { messages, total_count } =
      await this.messagesRepository.getAllByChats(chatId, query);

    const total_pages = Math.ceil(total_count / limit);
    const is_last_page = page >= total_pages;
    const items_count = messages.length;

    const paginationResponse: PaginationDTO.Response = {
      page: page,
      total_pages: total_pages,
      items_count: items_count,
      is_last_page: is_last_page,
    };

    return {
      messages: messages,
      pagination: paginationResponse,
    };
  }

  async getAllByChatsAndSender(
    query: GetAllByChatAndSenderMessageContract.RequestQuery,
    params: GetAllByChatAndSenderMessageContract.RequestParams,
  ): Promise<GetAllByChatAndSenderMessageContract.ResponsePayload> {
    const { chatId } = params;
    const { limit, page, sender } = query;
    const { messages, total_count } =
      await this.messagesRepository.getAllByChatsAndSender(chatId, sender, {
        limit,
        page,
      });

    const total_pages = Math.ceil(total_count / limit);
    const is_last_page = page >= total_pages;
    const items_count = messages.length;

    const paginationResponse: PaginationDTO.Response = {
      page: page,
      total_pages: total_pages,
      items_count: items_count,
      is_last_page: is_last_page,
    };

    return {
      messages: messages,
      pagination: paginationResponse,
    };
  }

  async findById(
    params: FindByIdMessageContract.RequestParams,
  ): Promise<FindByIdMessageContract.ResponsePayload | null> {
    const model = await this.messagesRepository.findById(params.id);
    return { message: MessagesDTO.fromModel(model) };
  }

  async create(
    params: CreateMessageContract.RequestParams,
    body: CreateMessageContract.RequestBody,
  ): Promise<CreateMessageContract.ResponsePayload> {
    const model = await this.messagesRepository.create(params.chatId, body);
    return { message: MessagesDTO.fromModel(model) };
  }

  async update(
    params: UpdateMessageContract.RequestParams,
    body: UpdateMessageContract.RequestBody,
  ): Promise<UpdateMessageContract.ResponsePayload> {
    const model = await this.messagesRepository.update(params.id, body);
    return { message: MessagesDTO.fromModel(model) };
  }

  async delete(
    params: DeleteMessageContract.RequestParams,
  ): Promise<DeleteMessageContract.ResponsePayload> {
    const model = await this.messagesRepository.delete(params.id);
    return { deleted: model };
  }
}
