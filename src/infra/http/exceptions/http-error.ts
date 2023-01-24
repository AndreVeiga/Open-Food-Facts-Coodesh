import { CodedError } from '@/infra/shared/coded-error';

export class HttpError extends CodedError {
  status_code: number;

  constructor(
    tag: string,
    message: string,
    status_code: number,
    details?: Record<string, any>
  ) {
    super(tag, message, details);
    this.status_code = status_code;
  }
}
