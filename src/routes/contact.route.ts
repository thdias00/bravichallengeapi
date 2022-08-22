import { Router } from "express";
import contactController from "../controllers/contact.controller";

const contactRouter = Router();

contactRouter.post(
    "/contacts",
    contactController.createContact
);

contactRouter.patch(
    "/contacts/:id",
    contactController.update
);

contactRouter.delete(
    "/contacts/:id",
    contactController.delete
);

export default contactRouter;