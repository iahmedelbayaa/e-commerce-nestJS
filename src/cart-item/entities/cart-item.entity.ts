import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CartEntity } from '../../cart/entities/cart.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity('cart_item')
export class CartItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: false })
  quantity: number;

  @ManyToOne(() => ProductEntity, product => product.cartItems)
  product: ProductEntity;

  @ManyToOne(() => UserEntity, user => user.cartItems)
  user: UserEntity;

  @ManyToOne(() => CartEntity, cart => cart.cartItems)
  cart: CartEntity;
}
