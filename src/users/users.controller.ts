import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProductEntity } from 'src/product/entities/product.entity';
import { GetProduct } from 'src/auth/get-product.decoretor';
import { AuthGuard } from '@nestjs/passport';
import { MailerService } from 'src/mailer/mailer.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private readonly mailerService: MailerService
  ) { }

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

  @Post('reset-password')
  async resetPassword(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.getUserByEmail(createUserDto.email);
    if (!user) {
      throw new Error('User not found');
    }

    const resetCode = await this.usersService.genResetCode(createUserDto.email);

    await this.mailerService.sendResetPasswordEmail(createUserDto.email, resetCode);

    return {
      message: 'Reset code sent to email'
    }
  }

  @Post('verify-code')
  async verifyCode(@Body() createUserDto: CreateUserDto) {
    const { email, resetCode, password } = createUserDto;
    return this.usersService.verifyCodeAndUpdatePassword(email, resetCode, password);
  }

}
