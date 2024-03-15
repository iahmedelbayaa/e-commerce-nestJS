import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProductEntity } from 'src/product/entities/product.entity';
import { GetProduct } from 'src/auth/get-product.decoretor';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@useGuards(AuthGuard())
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get(':userId/products')
  async getUserProducts(@Param('userId') userId: string, @GetProduct() product: ProductEntity) {
    return this.usersService.getUserProducts(+userId, product);
  }
}
function useGuards(arg0: any): (target: typeof UsersController) => void | typeof UsersController {
  throw new Error('Function not implemented.');
}

