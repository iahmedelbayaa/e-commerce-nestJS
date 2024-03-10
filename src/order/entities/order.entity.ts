import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
