import { NextFunction, Response } from 'express';
import { IRequestWithUser } from '../interfaces/user.interface';
import Jwt from '../utils/jwt';

export default class {
  private jwt = new Jwt();

  public validateToken(
    req: IRequestWithUser,
    _res: Response, 
    next: NextFunction,
  ): void {
    const { headers } = req as IRequestWithUser;

    if (!headers.authorization) return next({ status: 401, message: 'Token not found' });
    
    const token = headers.authorization as string;

    try {
      const { data } = this.jwt.decode(token);
      req.user = data;
      next();
    } catch (error) {
      next({ status: 401, message: 'Invalid token' });
    }
  }
}