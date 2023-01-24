import Product from '@/core/ports/products'
import ProductModel from '@/core/models/product';

export default class GetAllProductUseCase {
  private product: Product
  
  public constructor(product: Product) {
    this.product = product
  }
  
  public async getAll(): Promise<Array<ProductModel>> {
      const products = await this.product.find();
      return products
  }
}