import { CodedError } from '@/infra/shared/coded-error';

export class ProductAlreadyExistsError extends CodedError {
  constructor() {
    super('PRODUCT_ALREADY_EXISTS', 'Product already exists.');
  }
}
