import sinon from 'sinon'
import { assert, expect } from 'chai'
import { GetAllProductUseCase } from '@/core/useCases/product'
import { fake_product } from '@/core/useCases/product/tests/fake_product'
import { env } from '@/config/env'

describe('GetAllProductUseCase', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('Called with success', async () => {
    const new_product_fake = fake_product()
    const limit = 10
    const pages = 10
 
    const product = {
      find: sandbox.fake.resolves(new_product_fake)
    }
    
    const use_case = new GetAllProductUseCase(product as any)

    const result = await use_case.getAll(limit, pages)
    
    expect(result).to.be.eql(new_product_fake)
    assert(product.find.calledOnceWith(limit, pages))
  })

  it('Called with success (without parameters)', async () => {
    
    const new_product_fake = fake_product()
 
    const product = {
      find: sandbox.fake.resolves(new_product_fake)
    }
    
    const use_case = new GetAllProductUseCase(product as any)

    const result = await use_case.getAll()
    
    expect(result).to.be.eql(new_product_fake)
    assert(product.find.calledOnceWith(env.limit_from_products, 1))
  })
})