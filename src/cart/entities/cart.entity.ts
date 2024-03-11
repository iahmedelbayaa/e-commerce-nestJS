import { ProductEntity } from "src/product/entities/product.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CartEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @ManyToMany((_type) => ProductEntity, (product) => product.carts)
    products: ProductEntity[];
}
