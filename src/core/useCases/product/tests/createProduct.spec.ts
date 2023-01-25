import sinon from 'sinon'
import { assert, expect } from 'chai'
import { CreateProductUseCase } from '@/core/useCases/product'
import { fake_product } from '@/core/useCases/product/tests/fake_product'
import { ProductAlreadyExistsError } from '@/core/exceptions'

describe('CreateProductUseCase', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('Called with success', async () => {
    const new_product_fake = fake_product()
    const product = {
      create: sandbox.fake.resolves(new_product_fake),
      findByCode: sandbox.fake.resolves(undefined)
    }
    
    const use_case = new CreateProductUseCase(product as any)

    const result = await use_case.create(new_product_fake)
    
    expect(result).to.be.eql(new_product_fake)
    assert(product.findByCode.calledOnceWith(new_product_fake.code))
    assert(product.create.calledOnceWith(new_product_fake))
  })

  it('Called with error(ProductAlreadyExistsError)', async () => {
    const new_product_fake = fake_product()
    const product = {
      create: sandbox.fake.resolves(new_product_fake),
      findByCode: sandbox.fake.resolves(new_product_fake)
    }
    
    const use_case = new CreateProductUseCase(product as any)
    let error = null
    try {
      await use_case.create(new_product_fake)
    } catch (err) {
      error = err
    }

    expect(error).instanceof(ProductAlreadyExistsError)
    assert(product.findByCode.calledOnceWith(new_product_fake.code))
    assert(product.create.notCalled)
  })
})