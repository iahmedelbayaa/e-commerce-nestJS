import { Test, TestingModule } from '@nestjs/testing';
import { UserProductController } from './user-product.controller';
import { UserProductService } from './user-product.service';

describe('UserProductController', () => {
  let controller: UserProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserProductController],
      providers: [UserProductService],
    }).compile();

    controller = module.get<UserProductController>(UserProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
