import { Contact, User } from "../entities";
import { userRepository } from "../repositories";
import contactRepository from "../repositories/contact.repository";

interface IContactCreate{
    contact: Contact,
    owner: string
}

interface IContact{
    id: string,
    contact?: string,
    type?: string
}

class ContactService {
    create = async(req: IContactCreate) => {
        const user: User = await userRepository.retrieve({id: req.owner})

        await contactRepository.save({...req.contact, owner: user})

        return true
    }

    update = async (req: IContact) => {
        await contactRepository.update(req.id, { ...(req as Contact) });
    
        return true;
    };

    delete = async(req: IContact) => {
        const deletedContact = await contactRepository.retrieve({id: req.id});
        await contactRepository.delete(deletedContact.id);

        return true
    }
}

export default new ContactService();