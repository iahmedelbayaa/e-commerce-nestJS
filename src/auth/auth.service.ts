import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayLoad } from './jwt-payload.interface';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jwtService : JwtService
    ) { }

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

    async signIn(createUserDto: CreateUserDto): Promise<{accessToken : string}> {
        const {username , password} = createUserDto;

        const user = await this.userRepository.findOne({where :{username}});
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload : JwtPayLoad = {username};
            const accessToken = this.jwtService.sign(payload);
            return { accessToken};
        } else {
            throw new UnauthorizedException('Please check your login credentials');
        }
    }

}
