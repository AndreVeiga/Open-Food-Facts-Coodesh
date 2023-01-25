import ProductModel from "@/core/models/product";
import Product from "@/core/ports/products";

export class UpdateProductUseCase {
  private product: Product
  
  public constructor(product: Product) {
    this.product = product
  }

  public async updateByCode(code: string, productModel: Partial<ProductModel>): Promise<ProductModel> {
    const product = await this.product.findByCode(code)

    if (!product?.code) {
      throw new Error('Missing product')
    }

    await this.product.updateOne({ code }, productModel)

    return this.product.findByCode(code)
  }
}