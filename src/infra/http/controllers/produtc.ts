import { HttpRequest, HttpResponse } from '@/infra/http'
import { ProductRepository } from '@/infra/database/repositories/productRepository'
import { requestValidator, requestValidatorUpdate } from '@/infra/shared/schema'
import { HttpStatus } from '@/infra/http/types/httpStatus'
import { create_product_schema } from '@/infra/http/schemas'
import { errorDefault } from '@/infra/shared/error-default'
import { fields_forbidden } from '@/infra/http/types/fields'
import { ImportDataIntegration } from '@/infra/integrations/import_data'

import {
  ProductNotFoundError,
  ProductAlreadyExistsError
} from '@/core/exceptions'

import {
  GetAllProductUseCase,
  CreateProductUseCase,
  UpdateProductUseCase,
  DeleteProductUseCase,
  GetByCodeProductUseCase
} from '@/core/useCases/product'
import { ImportProductUseCase } from '@/core/useCases/product/importProdutcs'
import { NotificationRabbit } from '@/infra/integrations/amqp'

class ProdutcController {

  public async index(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const { limit, page } = req.query

    if (limit && !Number(limit)) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        tag: 'BAD_REQUEST',
        message: `limit: ${limit} invalid data`
      })
    }

    if (page && !Number(page)) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        tag: 'BAD_REQUEST',
        message: `page: ${page} invalid data`
      })
    }

    const productUseCase = new GetAllProductUseCase(new ProductRepository())
    const products = await productUseCase.getAll(Number(limit), Number(page))

    return res.status(HttpStatus.OK).send(products)
  }

  public async create(req: HttpRequest, res: HttpResponse): Promise<HttpResponse> {
    const { body } = req
    
    requestValidator(res, create_product_schema, body)

    const productUseCase = new CreateProductUseCase(new ProductRepository())
    
    try {
      const product = await productUseCase.create(body)
      return res.status(HttpStatus.CREATED).send(product)
    } catch (err) {
      if (err instanceof ProductAlreadyExistsError) {
        return res.status(HttpStatus.CONFLICT).send(err)
      }

      return errorDefault(res)
    }
  }

  public async update(req: HttpRequest, res: HttpResponse) {
    const { body } = req
    const { code } = req.params
    
    const result = requestValidatorUpdate(fields_forbidden, body, res)

    if (result.length){
      return res.status(HttpStatus.BAD_REQUEST).send({
        tag: 'BAD_REQUEST',
        message: 'Bad request',
        details: {
          fields_forbidden: result
        }
      })
    }

    const productUseCase = new UpdateProductUseCase(new ProductRepository())

    try {
      const result = await productUseCase.updateByCode(code, body)
      return res.status(HttpStatus.OK).send(result)
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send(error)
      }

      return errorDefault(res)
    } 
  }

  public async getByCode(req: HttpRequest, res: HttpResponse) {
    const { code } = req.params
    
    const productUseCase = new GetByCodeProductUseCase(new ProductRepository())
    
    try {
      const result = await productUseCase.getByCode(code)
      return res.status(HttpStatus.OK).send(result)
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send(error)
      }

      return errorDefault(res)
    } 
  }

  public async delete(req: HttpRequest, res: HttpResponse) {
    const { code } = req.params
    
    const productUseCase = new DeleteProductUseCase(new ProductRepository())

    try {
      const result = await productUseCase.delete(code)
      return res.status(HttpStatus.NO_CONTENT).send(result)
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        return res.status(HttpStatus.NOT_FOUND).send(error)
      }

      return errorDefault(res)
    } 
  }

  public async importData(req: HttpRequest, res: HttpResponse) {
    const importDataIntegration = new ImportDataIntegration()
    const importProductUseCase = new ImportProductUseCase(
      new ProductRepository(),
      new NotificationRabbit()
    )
    
    importDataIntegration.importData(importProductUseCase)

    res.status(HttpStatus.ACCEPTED).send()
  }
}

export default new ProdutcController()