import { Contact, User } from "../entities";

declare global {
  namespace Express {
    interface Request {
      validated: User | Contact;
      contact: Contact;
      user: User;
    }
  }
}
