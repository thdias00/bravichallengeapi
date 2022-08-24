import { Request, Response } from "express";
import contactService from "../services/contact.service";

class ContactController {
    createContact = async(req: Request, res: Response) => {
        await contactService.create(req.body);
        
        return res.status(201).json({message: "Contact successfully created"});
    }

    update = async (req: Request, res: Response) => {
        req.body.id = req.params['id']
        await contactService.update(req.body);
        return res.status(200).json({message: "Contact successfully updated"});
    };
    
    delete = async (req: Request, res: Response) =>{
        req.body.id = req.params['id']
        await contactService.delete(req.body);
        return res.status(202).json({message: "Contact successfully deleted"})
    }
}

export default new ContactController();