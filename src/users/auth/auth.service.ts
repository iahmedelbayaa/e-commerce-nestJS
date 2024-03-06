import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>) { }

    async signUp(createUserDto: CreateUserDto): Promise<UserEntity> {

        const { username, email, password , roles} = createUserDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = this.userRepository.create({
            username,
            email,
            password: hashedPassword,
            roles
        });

        try {
            const newUser = await this.userRepository.save(user);
            return newUser;
        } catch (error) {
            if (error.code === '23505') {
                // duplicate username
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }

        }


    }

}
