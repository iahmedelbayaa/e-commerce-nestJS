import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { OrderEntity } from './order.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity('order_item')
export class OrderItemEntity {
  @Column({ type: 'integer', nullable: false })
  quantity: number;

  @ManyToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => OrderEntity, { nullable: false })
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;
}
