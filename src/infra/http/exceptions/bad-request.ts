import { HttpError } from '@/infra/http/exceptions/http-error';

export default class BadRequest extends HttpError {
  constructor(tag: string, message: string, details?: Record<string, any>) {
    super(tag, message, 400, details);
  }
}
