import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column()
    category: string;


    @Column()
    image: string;

    @Column()
    brand: string;


    @Column()
    rating: number;

    @Column()
    numReviews: number;

    @Column()
    countInStock: number;

    @Column()
    user: string;

    @Column()
    reviews: string[];

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

}