import IProduct from '../interfaces/product.interface';
import connection from './connection';

export default class {
  private connection = connection;

  public async getAll(): Promise<IProduct[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products as IProduct[];
  }
}