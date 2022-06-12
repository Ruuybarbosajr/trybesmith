import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IUserToEnter } from '../interfaces/user.interface';

const schema = Joi.object({
  username: Joi.required(),
  password: Joi.required(),
});

export default class {
  private schema = schema;

  public validadeBody(
    req: Request,
    res: Response, 
    next: NextFunction,
  ): void {
    const { username, password } = req.body as IUserToEnter;

    const { error } = this.schema.validate({ username, password });
    if (error) {
      next({ status: 400, message: error.message });
    }

    next();
  }
}