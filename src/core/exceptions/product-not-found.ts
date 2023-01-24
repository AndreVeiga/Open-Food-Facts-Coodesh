import { CodedError } from '@/infra/shared/coded-error';

export class ProductNotFoundError extends CodedError {
  constructor() {
    super('PRODUCT_NOT_FOUND', 'Product not found');
  }
}
