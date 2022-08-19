import { User } from "../entities/User.entity";
import { userRepository } from "../repositories";
import { Request } from "express";
import {
  serializedCreateUserSchema,
} from "../schemas";
import { AssertsShape } from "yup/lib/object";

class UserService {

  create = async ({ validated }: Request): Promise<AssertsShape<any>> => {
    const user = await userRepository.save(validated as User);
    const createdUser = await userRepository.retrieve({ id: user.id });
    return await serializedCreateUserSchema.validate(createdUser, {
      stripUnknown: true,
    });
  };

  getById = async ({ user }: Request): Promise<AssertsShape<any>> => {
    const findedUser = await userRepository.retrieve({ id: user.id });
    return await serializedCreateUserSchema.validate(findedUser, {
      stripUnknown: true,
    });
  };

  getAll = async (): Promise<AssertsShape<any>> => {
    const users = await userRepository.listAll();
    return users
  };

  update = async ({ validated, user }: Request): Promise<AssertsShape<any>> => {
    await userRepository.update(user.id, { ...(validated as User) });
    const updatedUser = await userRepository.retrieve({ id: user.id });
    return await serializedCreateUserSchema.validate(updatedUser, {
      stripUnknown: true,
    });
  };
}

export default new UserService();
