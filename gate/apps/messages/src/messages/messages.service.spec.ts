import { Test, TestingModule } from '@nestjs/testing';
import { MessagesService } from './messages.service';
import { MessagesRepository, MessagesDTO, SenderType } from '@domains';

const mockDate = new Date();

const mockMessage = {
  id: 'msg-uuid',
  content: 'Hello world',
  sender: SenderType.USER,
  createdAt: mockDate,
};

describe('MessagesService', () => {
  let service: MessagesService;
  let messagesRepository: MessagesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessagesService,
        {
          provide: MessagesRepository,
          useValue: {
            getAllByChats: jest.fn(),
            getAllByChatsAndSender: jest.fn(),
            findById: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MessagesService>(MessagesService);
    messagesRepository = module.get<MessagesRepository>(MessagesRepository);
  });

  describe('getAllByChats', () => {
    it('should return messages for a chat with pagination', async () => {
      const query = { limit: 5, page: 1 };
      const params = { chatId: 'chat-1' };

      const repoResult = {
        messages: [mockMessage],
        total_count: 1,
      };

      (messagesRepository.getAllByChats as jest.Mock).mockResolvedValue(
        repoResult,
      );

      const result = await service.getAllByChats(query, params);

      expect(messagesRepository.getAllByChats).toHaveBeenCalledWith(
        params.chatId,
        query,
      );
      expect(result.pagination.total_pages).toBe(1);
      expect(result.messages[0]).toBeInstanceOf(Object); // Проверяем структуру DTO
      expect(result.messages[0].id).toBe(mockMessage.id);
    });
  });

  describe('getAllByChatsAndSender', () => {
    it('should filter by sender', async () => {
      const query = { limit: 10, page: 1, sender: SenderType.USER };
      const params = { chatId: 'chat-1' };

      const repoResult = {
        messages: [mockMessage],
        total_count: 10,
      };

      (
        messagesRepository.getAllByChatsAndSender as jest.Mock
      ).mockResolvedValue(repoResult);

      await service.getAllByChatsAndSender(query, params);

      expect(messagesRepository.getAllByChatsAndSender).toHaveBeenCalledWith(
        params.chatId,
        SenderType.USER,
        { limit: 10, page: 1 },
      );
    });
  });

  describe('create', () => {
    it('should create message', async () => {
      const params = { chatId: 'chat-1' };
      const body = { content: 'Hi', sender: SenderType.USER };

      (messagesRepository.create as jest.Mock).mockResolvedValue(mockMessage);

      const result = await service.create(params, body);

      expect(messagesRepository.create).toHaveBeenCalledWith(
        params.chatId,
        body,
      );
      expect(result.message).toEqual(MessagesDTO.fromModel(mockMessage as any));
    });
  });
});
