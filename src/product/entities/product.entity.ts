import { CartEntity } from "src/cart/entities/cart.entity";
import { CategoryEntity } from "src/category/entities/category.entity";
import { OrderEntity } from "src/order/entities/order.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column()
    image: string;

    @Column()
    brand: string;


    @Column()
    rating: number;

    @Column()
    numReviews: number;

    @Column()
    countInStock: number;

    @Column()
    user: string;

    @Column()
    reviews: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @ManyToMany((_type) => UserEntity, (user) => user.products)
    @JoinTable()
    users: UserEntity[];

    @ManyToMany((_type) => OrderEntity, (order) => order.Products)
    @JoinTable()
    orders: OrderEntity[];



    @ManyToMany((_type) => CartEntity, (cart) => cart.products)
    @JoinTable()
    carts: CartEntity[];


    @ManyToOne((_type) => CategoryEntity, (category) => category.products)
    category: CategoryEntity;
}
