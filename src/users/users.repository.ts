import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";




@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
        
        async findByEmail(email: string): Promise<UserEntity> {
            return this.findOne({ where: { email } });
        }
        
        async findById(id: number): Promise<UserEntity> {
            return this.findOne({ where: { id } });
        }
        
        async findByUsername(username: string): Promise<UserEntity> {
            return this.findOne({ where: { username } });
        }
        
        async createUser(user: UserEntity): Promise<UserEntity> {
            return this.save(user);
        }
        
        async updateUser(id: number, user: UserEntity): Promise<UserEntity> {
            await this.update(id, user);
            return this.findOne({ where: { id } });
        }
        
        async deleteUser(id: number): Promise<UserEntity> {
            const user = await this.findOne({ where: { id } });
            if (user) {
                await this.delete(id);
                return user;
            }
            return null;
        }
        
        async findAllUsers(): Promise<UserEntity[]> {
            return this.find();
        }
        
        async findUserById(id: number): Promise<UserEntity> {
            return this.findOne({ where: { id } });
        }
        
        async findUserByEmail(email: string): Promise<UserEntity> {
            return this.findOne({ where: { email } });
        }
        
        async findUserByUsername(username: string): Promise<UserEntity> {
            return this.findOne({ where: { username } });
        }
        
        // async findUserByToken(token: string): Promise<UserEntity> {
        //     return this.findOne({ where: { token } });
        // }
        
        // async findUserByResetToken(resetToken: string): Promise<UserEntity> {
        //     return this.findOne({ where: { resetToken } });
        // }
        
        // async findUserByVerificationToken(verificationToken: string): Promise<UserEntity> {
        //     return this.findOne({ where: { verificationToken } });
        // }
        
        // async findUserByProvider(provider: string, providerId: string): Promise<UserEntity> {
        //     return this.findOne({ where: { provider, providerId } });
        // }
        
        // async findUserByCredentials(email: string, password: string): Promise<UserEntity> {
        //     return this.findOne({ where: { email, password } });
        // }
        
        // async findUserByLocalCredentials(username: string, password: string): Promise<UserEntity> {
        //     return this.findOne({ where: { username, password } });
        // }
}
