import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
// import { CartItemEntity } from '../../cart-item/entities/cart-item.entity';


@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, user => user.carts)
  user: UserEntity;

  @ManyToMany((_type) => ProductEntity, (product) => product.carts)
  @JoinTable()
  products: ProductEntity[];

  // @OneToMany(() => CartItemEntity, cartItem => cartItem.cart)
  // cartItems: CartItemEntity[];
}
