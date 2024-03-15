import { ProductEntity } from "src/product/entities/product.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { OrderItemEntity } from "../../order-item/entities/order-item.entity";

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

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

    // @OneToMany(() => OrderItemEntity, orderItem => orderItem.order)
    // orderItems: OrderItemEntity[];

    @ManyToOne((_type) => ProductEntity, (product) => product.orders)
    @JoinTable()
    Products : ProductEntity;

    @ManyToOne((_type) => UserEntity, (user) => user.orders)
    user: UserEntity;

}
