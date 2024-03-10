import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CartEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    //user => cart relationship one to one

    //cart => product many to many 
}
