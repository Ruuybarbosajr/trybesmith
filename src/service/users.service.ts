import { INewUser } from '../interfaces/user.interface';
import UsersModel from '../models/users.model';
import Jwt from '../utils/jwt';

export default class {
  private model = new UsersModel();

  private jwt = new Jwt();

  public async create(newUser: INewUser): Promise<string> {
    const userCreated = await this.model.create(newUser);
    const token = this.jwt.encode(userCreated);
    return token;
  }
}