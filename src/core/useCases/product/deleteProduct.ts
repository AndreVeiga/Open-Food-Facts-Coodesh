import Product from '@/core/ports/products'
import { ProductNotFoundError } from '@/core/exceptions';
import { Status } from '@/core/types/status';

export class DeleteProductUseCase {
  private product: Product
  
  public constructor(product: Product) {
    this.product = product
  }
  
  public async delete(code: String): Promise<void> {
    await this.validateCreate(code)

    await this.product.updateOne(
      { code },
      { status: Status.trash }
    );
  }

  private async validateCreate(code: String): Promise<void> {
    const model = await this.product.findOne({ code })
    if (!model?.code) {
      throw new ProductNotFoundError()
    }
  }
}