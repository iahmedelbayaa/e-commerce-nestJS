import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    // one to many with product
}
