import { ResultSetHeader } from 'mysql2';
import { IProduct, INewProduct } from '../interfaces/product.interface';
import connection from './connection';

export default class {
  private connection = connection;

  public async getAll(): Promise<IProduct[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products as IProduct[];
  }

  public async create(newProduct: INewProduct): Promise<Omit<IProduct, 'orderId'>> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products (name, amount)
       VALUES (?, ?)`, [newProduct.name, newProduct.amount]);

    return {
      id: insertId,
      name: newProduct.name,
      amount: newProduct.amount,
    };
  }

  public async getByFk(fk: number): Promise<IProduct[]> {
    const [products] = await 
    this.connection.execute('SELECT * FROM Trybesmith.Products WHERE orderId=?', [fk]);
    return products as IProduct[];
  }

  public async updateFk(productId: number, orderId: number): Promise<void> {
    await this.connection.execute(`
    UPDATE Trybesmith.Products SET orderId=? WHERE id=?`, [orderId, productId]);
  }
}