// import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

// import { OrderEntity } from '../../order/entities/order.entity';
// import { ProductEntity } from 'src/product/entities/product.entity';
// import { UserEntity } from 'src/users/entities/user.entity';

// @Entity('order_item')
// export class OrderItemEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'integer', nullable: false })
//   quantity: number;

//   @ManyToOne(() => ProductEntity, product => product.orderItems)
//   product: ProductEntity;

//   @ManyToOne(() => UserEntity, user => user.orderItems)
//   user: UserEntity;

//   @ManyToOne(() => OrderEntity, order => order.orderItems)
//   order: OrderEntity;
// }
