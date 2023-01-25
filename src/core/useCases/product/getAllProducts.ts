export class GetAllProductUseCase {
  private product: any
  
  public constructor(product: any) {
    this.product = product
  }
  
  public async getAll(limit?: number, page?: number): Promise<any> {
    const _limite = limit || 1 
    const _page = page || 1 
    const result = await this.product
      .find(_limite, _page)
    
    return result
  }
}