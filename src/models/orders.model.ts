import { ResultSetHeader } from 'mysql2';
import { IOrder } from '../interfaces/order.interface';
import connection from './connection';

export default class {
  private connection = connection;

  public async getAll(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute('SELECT * FROM Trybesmith.Orders');
    return orders as IOrder[];
  }

  public async create(userId?: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Orders (userId) VALUES (?)`, [userId]);

    return insertId;
  }
}