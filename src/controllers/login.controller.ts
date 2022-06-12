import { NextFunction, Request, Response } from 'express';
import { IUserToEnter } from '../interfaces/user.interface';
import LoginService from '../service/login.service';

export default class {
  private service = new LoginService();

  public async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<{ token: string }> | void> {
    const { username, password } = req.body as IUserToEnter;
    try {
      const token = await this.service.login({ username, password });
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}