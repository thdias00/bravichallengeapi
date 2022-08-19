import { Router } from "express";
import { userController } from "../controllers";
import {
  getUserByIdOr404,
  validateSchema,
} from "../middlewares";
import {
  createUserSchema,
  userUpdateSchema,
} from "../schemas";

const userRouter = Router();

userRouter.get(
  "/users",
  userController.getAll
);
userRouter.post(
  "/users",
  validateSchema(createUserSchema),
  userController.createUser
);

userRouter.get(
  "/users/:id",
  getUserByIdOr404,
  userController.getById
);
userRouter.patch(
  "/users/:id",
  validateSchema(userUpdateSchema),
  getUserByIdOr404,
  userController.update
);

export default userRouter;
