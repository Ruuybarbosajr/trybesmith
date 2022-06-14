import { IOrderWithProducts } from '../interfaces/order.interface';
import OrdersModel from '../models/orders.model';
import ProductsModel from '../models/products.model';

export default class {
  private modelOrders = new OrdersModel();

  private modelProducts = new ProductsModel();

  public async getAll(): Promise<IOrderWithProducts[]> {
    const orders = await this.modelOrders.getAll() as IOrderWithProducts[];
    const productsByOrderId = orders.map((order) => this.modelProducts.getByFk(order.id));
    const products = await Promise.all(productsByOrderId);

    orders.forEach((_, index: number) => {
      orders[index].productsIds = products[index].map((product) => product.id);
    });

    return orders;
  }

  public async create(productsIds: number[], userId?: number) {
    const orderId = await this.modelOrders.create(userId);
    const promiseListUpdateProducts = productsIds.map((id) => 
      this.modelProducts.updateFk(id, orderId));

    await Promise.all(promiseListUpdateProducts);

    return {
      userId,
      productsIds,
    };
  }
}