import { ProductEntity } from "src/product/entities/product.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @ManyToMany((_type) => ProductEntity, (product) => product.orders)
    products: ProductEntity[];

    @ManyToOne((_type) => UserEntity, (user) => user.orders)
    user: UserEntity;

}
