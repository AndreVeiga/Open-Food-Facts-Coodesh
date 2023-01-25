import Product from '@/core/ports/products'
import ProductModel from '@/core/models/product';
import { ProductNotFoundError } from '@/core/exceptions';

export class GetByCodeProductUseCase {
  private product: Product
  
  public constructor(product: Product) {
    this.product = product
  }
  
  public async getByCode(code: String): Promise<ProductModel> {
    const product = await this.product.findByCode(code);
      
    if (!product?.code) {
      throw new ProductNotFoundError()
    }

    return product
  }
}