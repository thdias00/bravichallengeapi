import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id?: string;
  
    @Column()
    contact: string;
  
    @Column()
    type: string;
  
    @ManyToOne(() => User, (user) => user.contacts, { eager: true })
    owner: User;
  }