import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('Users')
export class User {
    @PrimaryGeneratedColumn()

    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;
}