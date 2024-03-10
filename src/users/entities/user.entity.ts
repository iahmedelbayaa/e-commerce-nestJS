import { ProductEntity } from "src/product/entities/product.entity";
import { Roles } from "src/users/utility/user.enum";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Roles,
        default: Roles.USER
    })
    roles: Roles;

    @ManyToMany((_type) => ProductEntity, (product) => product.users)
    products: ProductEntity[];
}
