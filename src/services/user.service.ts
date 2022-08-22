import { User } from "../entities/User.entity";
import { userRepository } from "../repositories";
import { Request } from "express";
import { serializedCreateUserSchema } from "../schemas";
import { AssertsShape } from "yup/lib/object";
import contactRepository from "../repositories/contact.repository";

class UserService {

  create = async ({ validated, contact }: Request): Promise<AssertsShape<any>> => {
    const user = await userRepository.save(validated as User);
    await contactRepository.save({...contact, owner: user.id as unknown as User});

    const allContacts = await contactRepository.listAll();
    const contactsFilter = allContacts.filter(contact => contact.owner.id == user.id)

    user.contacts = contactsFilter

    return await serializedCreateUserSchema.validate(user, {
      stripUnknown: true,
    });
  };

  getById = async ({ user }: Request): Promise<AssertsShape<any>> => {
    const findedUser = await userRepository.retrieve({ id: user.id });

    const allContacts = await contactRepository.listAll();
    const contactsFilter = allContacts.filter(contact => contact.owner.id == findedUser.id)

    findedUser.contacts = contactsFilter

    return await serializedCreateUserSchema.validate(findedUser, {
      stripUnknown: true,
    });
  };

  getAll = async (): Promise<AssertsShape<any>> => {
    const users = await userRepository.listAll();
    const allContacts = await contactRepository.listAll();

    users.map(user => {
      user.contacts = allContacts.filter(contact => contact.owner.id == user.id)
    })

    users.map(user => {
      user.contacts.map(contact => delete contact.owner)
    })
    
    return ({users: users})
  };

  update = async ({ validated, user }: Request): Promise<AssertsShape<any>> => {
    await userRepository.update(user.id, { ...(validated as User) });
    const updatedUser: User = await userRepository.retrieve({ id: user.id });

    const allContacts = await contactRepository.listAll();
    const contactsFilter = allContacts.filter(contact => contact.owner.id == updatedUser.id)

    updatedUser.contacts = contactsFilter

    return await serializedCreateUserSchema.validate(updatedUser, {
      stripUnknown: true,
    });
  };

  delete = async ({user}: Request) => {
    const deletedUser = await userRepository.retrieve({ id: user.id });

    const allContacts = await contactRepository.listAll();
    const contactsFilter = allContacts.filter(contact => contact.owner.id == deletedUser.id)

    contactsFilter.map(contact => contactRepository.delete(contact.id))

    await userRepository.delete(deletedUser.id);

    return true;
  };
}

export default new UserService();
