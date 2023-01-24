import { HttpRequest, HttpResponse } from '@/infra/http'
import ProductSchema from '@/infra/database/schemas/product'
import requestValidator from '@/infra/shared/schema'
import { create_product_schema } from '@/infra/http/schemas/create-product.schema'
import { HttpStatus } from '@/infra/http/types/httpStatus'
import {
  GetAllProductUseCase,
  CreateProductUseCase,
  UpdateProductUseCase,
  DeleteProductUseCase,
  GetByCodeProductUseCase
} from '@/core/useCases/product'
import { ProductNotFoundError, ProductAlreadyExistsError } from '@/core/exceptions'

class ProdutcController {

  public async index(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const productUseCase = new GetAllProductUseCase(ProductSchema as any)
    const products = await productUseCase.getAll()

    return res.status(HttpStatus.OK).send(products)
  }

  public async create(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const { body } = req
    requestValidator(res, create_product_schema, body)
    const productUseCase = new CreateProductUseCase(ProductSchema as any)
    
    try {
      const product = await productUseCase.create(body)
      return res.status(HttpStatus.CREATED).send(product)
    } catch (err) {
      if (err instanceof ProductAlreadyExistsError) {
        return res.status(HttpStatus.CONFLICT).send(err)
      }

      return this.errorDefault(res)
    }
  }

  public async update(req: HttpRequest, res: HttpResponse) {
    const { body } = req
    const { code } = req.params
    
    requestValidator(res, create_product_schema, body)

    const productUseCase = new UpdateProductUseCase(ProductSchema as any)

    try {
      const result = await productUseCase.updateByCode(code, body)
      return res.status(HttpStatus.OK).send(result)
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send(error)
      }

      return this.errorDefault(res)
    } 
  }

  public async getByCode(req: HttpRequest, res: HttpResponse) {
    const { code } = req.params
    const productUseCase = new GetByCodeProductUseCase(ProductSchema as any)
    
    try {
      const result = await productUseCase.getByCode(code)
      return res.status(HttpStatus.OK).send(result)
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send(error)
      }

      return this.errorDefault(res)
    } 
  }

  public async delete(req: HttpRequest, res: HttpResponse) {
    const { code } = req.params
    const productUseCase = new DeleteProductUseCase(ProductSchema as any)

    try {
      const result = await productUseCase.delete(code)
      return res.status(HttpStatus.NO_CONTENT).send(result)
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send(error)
      }

      return this.errorDefault(res)
    } 
  }

  private errorDefault(res: HttpResponse): HttpResponse {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      message: 'Internal Server Error',
      code: 'INTERNAL_SERVER_ERROR'
    })
  }
}

export default new ProdutcController()