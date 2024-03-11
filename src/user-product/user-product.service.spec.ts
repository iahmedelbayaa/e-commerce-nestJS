import { Test, TestingModule } from '@nestjs/testing';
import { UserProductService } from './user-product.service';

describe('UserProductService', () => {
  let service: UserProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProductService],
    }).compile();

    service = module.get<UserProductService>(UserProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
