import { Test, TestingModule } from '@nestjs/testing';
import { ChatsService } from './chats.service';
import { ChatsRepository, ChatsDTO } from '@domains';
import { AuthPayload } from '@systems';

const mockDate = new Date();

const mockChat = {
  id: 'chat-uuid',
  title: 'Test Chat',
  createdAt: mockDate,
};

const mockAuthPayload: AuthPayload = {
  owner: { id: 'user-uuid' },
};

describe('ChatsService', () => {
  let service: ChatsService;
  let chatsRepository: ChatsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatsService,
        {
          provide: ChatsRepository,
          useValue: {
            getAllByUser: jest.fn(),
            findById: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ChatsService>(ChatsService);
    chatsRepository = module.get<ChatsRepository>(ChatsRepository);
  });

  describe('getAllByUser', () => {
    it('should return paginated chats', async () => {
      const query = { limit: 10, page: 1 };
      const repoResult = {
        chats: [mockChat],
        total_count: 25,
      };

      (chatsRepository.getAllByUser as jest.Mock).mockResolvedValue(repoResult);

      const result = await service.getAllByUser(query, mockAuthPayload);

      expect(chatsRepository.getAllByUser).toHaveBeenCalledWith(mockAuthPayload.owner.id, query);

      // Проверка пагинации
      expect(result.pagination).toEqual({
        page: 1,
        total_pages: 3, // Math.ceil(25 / 10)
        items_count: 1,
        is_last_page: false,
      });

      expect(result.chats[0]).toEqual(ChatsDTO.fromModel(mockChat as any));
    });
  });

  describe('create', () => {
    it('should create a chat and return DTO', async () => {
      const createDto = { title: 'New Chat' };
      (chatsRepository.create as jest.Mock).mockResolvedValue(mockChat);

      const result = await service.create(createDto, mockAuthPayload);

      expect(chatsRepository.create).toHaveBeenCalledWith(mockAuthPayload.owner.id, createDto);
      expect(result.chat).toEqual(ChatsDTO.fromModel(mockChat as any));
    });
  });

  describe('delete', () => {
    it('should delete chat and return status', async () => {
      (chatsRepository.delete as jest.Mock).mockResolvedValue(true);
      const result = await service.delete({ id: 'chat-id' });
      expect(result.deleted).toBe(true);
    });
  });
});