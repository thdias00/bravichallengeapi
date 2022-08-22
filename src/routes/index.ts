import { Express } from "express";
import userRouter from "./user.route";
import contactRouter from "./contact.route";

const registerRouters = (app: Express): void => {

    app.use(userRouter);
    app.use(contactRouter);
  };
  
export default registerRouters;


