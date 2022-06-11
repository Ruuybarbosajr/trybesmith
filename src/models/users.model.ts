import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/user.interface';
import connection from './connection';

export default class {
  private connection = connection;

  public async create(newUser: IUser): Promise<Omit<IUser, 'password'>> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?,?,?,?)`, [newUser.username, newUser.classe, newUser.level, newUser.password]);

    return {
      id: insertId,
      username: newUser.username,
      classe: newUser.classe,
      level: newUser.level,
    };
  }
}