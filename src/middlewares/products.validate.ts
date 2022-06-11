import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { INewProduct } from '../interfaces/product.interface';

const schemaBody = Joi.object({
  name: Joi.required(),
  amount: Joi.required(),
});

const schemaContent = Joi.object({
  name: Joi.string().min(3),
  amount: Joi.string().min(3),
});

export default class {
  private schemaBody = schemaBody;

  private schemaContent = schemaContent;

  public validateBody(req: Request, _res: Response, next: NextFunction): void {
    const { name, amount } = req.body as INewProduct;

    const { error } = this.schemaBody.validate({ name, amount });

    if (error) next({ status: 400, message: error.message });

    next();
  }

  public validateContent(req: Request, _res: Response, next: NextFunction): void {
    const { name, amount } = req.body as INewProduct;

    const { error } = this.schemaContent.validate({ name, amount });

    if (error) next({ status: 422, message: error.message });

    next();
  }
}