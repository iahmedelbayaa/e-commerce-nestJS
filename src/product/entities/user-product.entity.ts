import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductEntity } from './product.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity('user_product')
export class UserProductEntity {
  @Column({ type: 'double precision', nullable: false })
  price: number;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
