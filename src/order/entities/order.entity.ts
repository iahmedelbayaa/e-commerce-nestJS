import { ProductEntity } from "src/product/entities/product.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;



    //order => product relationship many to many
    @ManyToMany((_type) => ProductEntity, (product) => product.orders)
    products: ProductEntity[];

}
