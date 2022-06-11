import OrdersModel from '../models/orders.model';
import ProductsModel from '../models/products.model';

const modelOrders = new OrdersModel();
const modelProducts = new ProductsModel();

export default class {
  private model = modelOrders;

  private modelProducts = modelProducts;

  public async getAll() {
    const orders = await this.model.getAll();

    const productsByOrderId = orders.map((order) => this.modelProducts.getByFk(order.id));

    const products = await Promise.all(productsByOrderId);

    orders.forEach((_, index: number) => {
      orders[index].productsIds = products[index].map((product) => product.id);
    });

    return orders;
  }
}