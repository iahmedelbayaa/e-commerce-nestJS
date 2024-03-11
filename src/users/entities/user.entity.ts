import { CartItemEntity } from "src/cart/entities/cart-item.entity";
import { CartEntity } from "src/cart/entities/cart.entity";
import { OrderItemEntity } from "src/order/entities/order-item.entity";
import { OrderEntity } from "src/order/entities/order.entity";
import { ProductEntity } from "src/product/entities/product.entity";
import { Roles } from "src/users/utility/user.enum";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";


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

    @OneToMany(() => OrderEntity, order => order.user)
    orders: OrderEntity[];

    @OneToMany(() => CartEntity, cart => cart.user)
    carts: CartEntity[];

    @ManyToMany(() => ProductEntity, product => product.users)
    @JoinTable()
    products: ProductEntity[];

    @OneToMany(() => OrderItemEntity, orderItem => orderItem.user)
    orderItems: OrderItemEntity[];

    @OneToMany(() => CartItemEntity, cartItem => cartItem.user)
    cartItems: CartItemEntity[];


}
