import { ProductEntity } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    // one to many with product
    @OneToMany((_type) => ProductEntity, (product) => product.category)
    products: ProductEntity[];
}
