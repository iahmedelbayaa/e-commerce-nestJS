import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../../product/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity('user_product')
export class UserProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'double precision', nullable: false })
  price: number;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
