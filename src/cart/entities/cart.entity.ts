import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CartEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    //user => cart relationship one to one

    //cart => product many to many 
}
