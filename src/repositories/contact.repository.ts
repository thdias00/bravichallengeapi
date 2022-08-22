import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { Contact } from "../entities";

interface IContactRepo {
    save: (contact: Partial<Contact>) => Promise<Contact>;
    listAll: () => Promise<Contact[]>;
    retrieve: (payload: object) => Promise<Contact>;
    update: (id: string, payload: Partial<Contact>) => Promise<UpdateResult>;
    delete: (id: string) => Promise<DeleteResult>;
}

class ContactRepository implements IContactRepo {
    private contactRepo: Repository<Contact>;

    constructor() {
        this.contactRepo = AppDataSource.getRepository(Contact);
    }

    save = async (contact:Contact): Promise<Contact> => await this.contactRepo.save(contact);
       
    listAll = async () => await this.contactRepo.find(); 

    retrieve = async (payload: object) => await this.contactRepo.findOneBy({...payload});

    update = async (id: string, payload: Partial<Contact>) => await this.contactRepo.update(id, {...payload});

    delete = async (id: string): Promise<DeleteResult> => await this.contactRepo.delete(id);
}

export default new ContactRepository();