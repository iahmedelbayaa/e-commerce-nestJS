import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  
  createUser(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  // findAll() {
  //   return this.usersRepository.findAllUsers();
  // }

  // findOne(id: number) {
  //   return this.usersRepository.findUserById(id);
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return this.usersRepository.updateUser(id, updateUserDto);
  // }

  // remove(id: number) {
  //   return this.usersRepository.deleteUser(id);
  // }
}
