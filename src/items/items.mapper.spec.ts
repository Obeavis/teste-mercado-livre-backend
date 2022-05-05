import { Test, TestingModule } from '@nestjs/testing';
import { ItemsMapper } from './items.mapper';

describe('ItemsMapper', () => {
  let service: ItemsMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsMapper],
    }).compile();

    service = module.get<ItemsMapper>(ItemsMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
