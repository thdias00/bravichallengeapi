import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateSchema =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.validated = validated;
      req.contact = req.body.contact;

      return next();
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }
  };

export default validateSchema;
