import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IUser } from '../interfaces/user.interface';

const schemaBody = Joi.object({
  username: Joi.required(),
  classe: Joi.required(),
  level: Joi.required(),
  password: Joi.required(),
});

const schemaContent = Joi.object({
  username: Joi.string().min(3),
  classe: Joi.string().min(3),
  level: Joi.number().min(1),
  password: Joi.string().min(8),
});

export default class {
  private schemaBody = schemaBody;

  private schemaContent = schemaContent;

  public validateBody(req: Request, res: Response, next: NextFunction): void {
    const { classe, level, password, username } = req.body as IUser;
    const { error } = this.schemaBody.validate({ classe, level, password, username });
    if (error) next({ status: 400, message: error.message });
    next();
  }

  public validateContent(req: Request, res: Response, next: NextFunction): void {
    const { classe, level, password, username } = req.body as IUser;
    const { error } = this.schemaContent.validate({ classe, level, password, username });
    if (error) next({ status: 422, message: error.message });
    next();
  }
}