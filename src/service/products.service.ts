import ProductsModel from '../models/products.model';
import { INewProduct, IProduct } from '../interfaces/product.interface';

export default class {
  private model = new ProductsModel();

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  async create({ name, amount }: INewProduct):Promise<Omit<IProduct, 'orderId'>> {
    const newProduct = await this.model.create({ name, amount });
    return newProduct;
  }
}