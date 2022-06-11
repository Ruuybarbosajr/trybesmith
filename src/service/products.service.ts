import ProductsModel from '../models/products.model';
import IProduct from '../interfaces/product.interface';

export default class {
  private model = new ProductsModel();

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }
}