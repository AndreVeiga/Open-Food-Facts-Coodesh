import { env } from "@/config/env"

export class GetAllProductUseCase {
  private product: any
  
  public constructor(product: any) {
    this.product = product
  }
  
  public async getAll(limit?: number, page?: number): Promise<any> {
    const _limite = limit || env.limit_from_products
    const _page = page || 1 
    const result = await this.product
      .find(_limite, _page)
    
    return result
  }
}