import IError from '../interfaces/error.interface';
import { IUserToEnter } from '../interfaces/user.interface';
import UsersModel from '../models/users.model';
import Jwt from '../utils/jwt';

export default class {
  private model = new UsersModel();

  private jwt = new Jwt();

  public async login(userToEnter: IUserToEnter): Promise<string | void> {
    const [user] = await this.model.getByUsername(userToEnter.username);
    
    if (user?.username !== userToEnter.username || user?.password !== userToEnter.password) {
      const error = new Error('Username or password invalid') as IError;
      error.status = 401;
      throw error;
    }
    const { id, username, level, classe } = user;

    const token = this.jwt.encode({
      id,
      username,
      level,
      classe,
    });

    return token;
  }
}