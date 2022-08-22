import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
  createUser = async (req: Request, res: Response) => {
    const user = await userService.create(req);
    return res.status(201).json(user);
  };

  getById = async (req: Request, res: Response) => {
    const user = await userService.getById(req);
    return res.status(200).json(user);
  };

  getAll = async (_: Request, res: Response) => {
    const users = await userService.getAll();
    return res.status(200).json(users);
  };

  update = async (req: Request, res: Response) => {
    const user = await userService.update(req);
    return res.status(200).json(user);
  };

  delete = async (req: Request, res: Response) =>{
    await userService.delete(req);
    return res.status(202).json({message: "User successfully deleted"})
  }
}

export default new UserController();
