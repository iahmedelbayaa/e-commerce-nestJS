import { Injectable } from '@nestjs/common';
import { CreateUserProductDto } from './dto/create-user-product.dto';
import { UpdateUserProductDto } from './dto/update-user-product.dto';

@Injectable()
export class UserProductService {
  create(createUserProductDto: CreateUserProductDto) {
    return 'This action adds a new userProduct';
  }

  findAll() {
    return `This action returns all userProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userProduct`;
  }

  update(id: number, updateUserProductDto: UpdateUserProductDto) {
    return `This action updates a #${id} userProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} userProduct`;
  }
}
