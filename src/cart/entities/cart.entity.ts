import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, Column, ManyToMany, PrimaryGeneratedColumn, JoinTable, ManyToOne } from 'typeorm';


@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToMany(() => ProductEntity, product => product.carts)
  @JoinTable() // This is necessary for ManyToMany relationships
  products: ProductEntity[];

  @ManyToOne(() => UserEntity, user => user.carts)
  user: UserEntity;
}
