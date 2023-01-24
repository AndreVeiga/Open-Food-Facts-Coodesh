import { HttpError } from '@/infra/http/exceptions/http-error';

export default class BadRequest extends HttpError {
  constructor(code: string, message: string, details?: Record<string, any>) {
    super(code, message, 400, details);
  }
}
