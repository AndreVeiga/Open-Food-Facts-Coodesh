import Joi from 'joi';
import BadRequest from '@/infra/http/exceptions/bad-request'

export default abstract class Controller {
  public requestValidator(schema?: Joi.Schema, body?: any): void {
    if (!schema) return undefined;
    if (!body) return undefined;

    const validation = schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
      allowUnknown: true,
    });

    if (validation.error) {
      throw new BadRequest(
        'VALIDATION_FAILED',
        'Invalid request data',
        validation.error.details
      )
    }
  }
}