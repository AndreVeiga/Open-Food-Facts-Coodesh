import Joi from 'joi';
import { Response } from 'express';
import { HttpStatus } from '@/infra/http/types/httpStatus';

export const  requestValidator = (res: Response, schema?: Joi.Schema, body?: any): void => {
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

export const requestValidatorUpdate = (fields_forbidden: Array<string>, body: any, res: Response): Array<string> => {
  const result = [] as Array<string>
  Object.keys(body)
  .filter((key: string) => fields_forbidden.includes(key))
  .map((key_forbidden) => result.push(key_forbidden))
  return result
}