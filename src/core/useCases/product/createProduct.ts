import Product from '@/core/ports/products'
import ProductModel from '@/core/models/product';
import { ProductAlreadyExistsError } from '@/core/exceptions';

export class CreateProductUseCase {
  private product: Product
  
  public constructor(product: Product) {
    this.product = product
  }
  
  public async create(productModel: ProductModel): Promise<ProductModel> {
    await this.validateCreate(productModel)
    
    const product = await this.product.create(productModel);
    return product
  }

  private async validateCreate(productModel: ProductModel): Promise<void> {
    const { code } = productModel
    if (code) {
      const model = await this.product.findByCode(code)
      if (model?.code) {
        throw new ProductAlreadyExistsError()
      }
    }
  }
}