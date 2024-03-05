import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private userRepository:UsersRepository
    ){}

    

}
