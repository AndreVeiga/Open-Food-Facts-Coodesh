import Product from '@/core/ports/products'
import ProductModel from '@/core/models/product';

export default class CreateProductUseCase {
  private product: Product
  
  public constructor(product: Product) {
    this.product = product
  }
  
  public async create(productModel: ProductModel): Promise<ProductModel> {
      const product = await this.product.create(productModel);
      return product
  }
}