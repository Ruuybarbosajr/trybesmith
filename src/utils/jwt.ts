import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';

export default class {
  private JWTconfig: jwt.SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  private secret = 'TOTESTANDOCLASSEVLWFLW';

  private jwt = jwt;

  public encode(data: Omit<IUser, 'password'>): string {
    const token = this.jwt.sign({ data }, this.secret, this.JWTconfig);
    return token;
  }

  public decode(token: string) {
    const decoded = jwt.verify(token, this.secret);
    return decoded as Omit<IUser, 'password'>;
  }
}