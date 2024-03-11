import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProductService } from './user-product.service';
import { CreateUserProductDto } from './dto/create-user-product.dto';
import { UpdateUserProductDto } from './dto/update-user-product.dto';

@Controller('user-product')
export class UserProductController {
  constructor(private readonly userProductService: UserProductService) {}

  @Post()
  create(@Body() createUserProductDto: CreateUserProductDto) {
    return this.userProductService.create(createUserProductDto);
  }

  @Get()
  findAll() {
    return this.userProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserProductDto: UpdateUserProductDto) {
    return this.userProductService.update(+id, updateUserProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProductService.remove(+id);
  }
}
