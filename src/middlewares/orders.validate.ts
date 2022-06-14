import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const schemaBody = Joi.required().messages({
  'any.required': '"productsIds" is required',
});
const schemaContent = Joi.array().min(1).items(Joi.number()).messages({
  'array.base': '"productsIds" must be an array',
  'array.min': '"productsIds" must include only numbers',
});

export default class {
  private schemaBody = schemaBody;

  private schemaContent = schemaContent;

  public validateBody(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { productsIds } = req.body;
    const { error } = this.schemaBody.validate(productsIds);
    if (error) return next({ status: 400, message: error.message });
    next();
  }

  public validateContent(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { productsIds } = req.body;
    const { error } = this.schemaContent.validate(productsIds);
    if (error) return next({ status: 422, message: error.message });
    next();
  }
}