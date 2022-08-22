import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./Contact.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id?: string;
  
    @Column()
    name: string;
  
    @Column()
    function: string;
  
    @OneToMany(() => Contact, (contact) => contact.owner)
    contacts: Contact[];
  }