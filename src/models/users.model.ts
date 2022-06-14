import { ResultSetHeader } from 'mysql2';
import { INewUser, IUser } from '../interfaces/user.interface';
import connection from './connection';

export default class {
  private connection = connection;

  public async create(newUser: INewUser): Promise<Omit<IUser, 'password'>> {
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

  public async getByUsername(username: string): Promise<IUser[]> {
    const [user] = await this.connection.execute(`
    SELECT * FROM Trybesmith.Users WHERE username=?`, [username]);
    return user as IUser[];
  }
}