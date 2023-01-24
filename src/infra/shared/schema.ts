import Joi from 'joi';
import { Response } from 'express';
import { HttpStatus } from '@/infra/http/types/httpStatus';

const  requestValidator = (res: Response,schema?: Joi.Schema, body?: any): void => {
  if (!schema) return undefined;
  if (!body) return undefined;

  const validation = schema.validate(body, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
  });

  if (validation.error) {
    res.status(HttpStatus.BAD_REQUEST).send(validation.error.details)
  }
}

export default requestValidator
