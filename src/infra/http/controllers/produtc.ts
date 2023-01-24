import { HttpRequest, HttpResponse } from '@/infra/http'
import ProductSchema from '@/infra/database/schemas/product'
import GetAllProductUseCase from '@/core/useCases/product/getAllProducts'
import CreateProductUseCase from '@/core/useCases/product/createProduct'
import Controller from '@/infra/http/controllers/controller'
import { create_product_schema } from '@/infra/http/schemas/create-product.schema'

class ProdutcController extends Controller {

  public async index(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const productUseCase = new GetAllProductUseCase(ProductSchema as any)
    
    const products = await productUseCase.getAll()
    return res.send(products)
  }

  public async create(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const { body } = req
    // this.requestValidator(create_product_schema, body)

    const productUseCase = new CreateProductUseCase(ProductSchema as any)
    
    const product = await productUseCase.create(body)
    return res.send(product)
  } 
}

export default new ProdutcController()