import { Module } from '@nestjs/common';
import { UserProductService } from './user-product.service';
import { UserProductController } from './user-product.controller';

@Module({
  controllers: [UserProductController],
  providers: [UserProductService],
})
export class UserProductModule {}
