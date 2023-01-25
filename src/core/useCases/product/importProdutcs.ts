import Product from '@/core/ports/products'
import ProductModel from '@/core/models/product';
import { Notification } from '@/core/ports/notification';

export class ImportProductUseCase {
  private product: Product
  private notification: Notification
  
  public constructor(product: Product, notification: Notification) {
    this.product = product
    this.notification = notification
  }
  
  public async create(productModel: ProductModel): Promise<void> {
    try {
      /*
      if (true) {
        throw new Error()
      }
      */

      const { code } = productModel

      const is_exists = await this.isExist(code)
      
      if (is_exists) {
        const productModelUpdated = {
          ...productModel,
          imported_t: new Date()
        }
        await this.product.updateOne({ code }, productModelUpdated)
      } else {
        await this.product.create(productModel)
      }
    } catch (err) {
      console.log(err)
      
      await this.notification.send({
        body: productModel,
        kind: 'ERROR',
        details: 'Error in import data'
      })
    }
  }

  private async isExist(code?: string): Promise<boolean> {
    if (code) {
      const model = await this.product.findByCode(code)
      if (model?.code) {
        return true
      }
    }

    return false
  }
}