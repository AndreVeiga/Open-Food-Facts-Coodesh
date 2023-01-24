import ProductModel from "@/core/models/product";
import Product from "@/core/ports/products";

export class UpdateProductUseCase {
  private product: Product
  
  public constructor(product: Product) {
    this.product = product
  }

  public async updateByCode(code: string, productModel: Partial<ProductModel>): Promise<ProductModel> {
    const clause = { code }
    const product = await this.product.findOne(clause)

    if (!product?.code) {
      throw new Error('Missing product')
    }

    return this.product.updateOne(clause, productModel)
  }
}