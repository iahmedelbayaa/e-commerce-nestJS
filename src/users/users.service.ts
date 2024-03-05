import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.createUser(createUserDto);
  }

  findAll() {
    return this.usersRepository.findAllUsers();
  }

  findOne(id: number) {
    return this.usersRepository.findUserById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.updateUser(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
