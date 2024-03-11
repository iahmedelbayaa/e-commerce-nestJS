import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { CartEntity } from './cart.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity('cart_item')
export class CartItemEntity {
  @Column({ type: 'integer', nullable: false })
  quantity: number;

  @ManyToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => CartEntity, { nullable: false })
  @JoinColumn({ name: 'cart_id' })
  cart: CartEntity;
}
