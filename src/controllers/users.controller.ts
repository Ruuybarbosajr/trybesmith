import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/user.interface';
import UsersService from '../service/users.service';

export default class {
  private service = new UsersService();

  public async create(
    req: Request,
    res: Response, 
    next: NextFunction,
  ): Promise<Response<{ token: string }> | void> {
    const { username, classe, level, password } = req.body as IUser;
    try {
      const token = await this.service.create({ username, classe, level, password });
      return res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}