import sinon from 'sinon'
import { assert, expect } from 'chai'
import { GetByCodeProductUseCase } from '@/core/useCases/product'
import { fake_product } from '@/core/useCases/product/tests/fake_product'
import { ProductNotFoundError } from '@/core/exceptions'

describe('GetByCodeProductUseCase', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('Called with success', async () => {
    const code = `code-${Math.random() * 100}`
    const new_product_fake = fake_product()
    const product = {
      findByCode: sandbox.fake.resolves(new_product_fake)
    }
    
    const use_case = new GetByCodeProductUseCase(product as any)

    const result = await use_case.getByCode(code)
    
    expect(result).to.be.eql(new_product_fake)
    assert(product.findByCode.calledOnceWith(code))
  })

  it('Called with error(ProductNotFoundError)', async () => {
    const code = `code-${Math.random() * 100}`
    const product = {
      findByCode: sandbox.fake.resolves(undefined)
    }
    
    const use_case = new GetByCodeProductUseCase(product as any)

    let error = null
    try {
      await use_case.getByCode(code)
    } catch (err) {
      error = err
    }

    expect(error).instanceof(ProductNotFoundError)
    assert(product.findByCode.calledOnceWith(code))
  })
})