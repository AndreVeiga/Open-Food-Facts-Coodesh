import Joi from 'joi'
import { Status } from '@/core/types/status'

export const create_product_schema = Joi.object({
  code: Joi.string(),
  status: Joi.string().valid(...Object.keys(Status)),
  imported_t: Joi.string(),
  url: Joi.string(),
  creator: Joi.number(),
  created_t: Joi.string(),
  last_modified_t: Joi.number(),
  product_name: Joi.string(),
  quantity: Joi.string(),
  brands: Joi.string(),
  categories: Joi.string(),
  labels: Joi.string(),
  cities: Joi.string(),
  purchase_places: Joi.string(),
  stores: Joi.string(),
  ingredients_text: Joi.string(),
  traces: Joi.string(),
  serving_size: Joi.string(),
  serving_quantity: Joi.number(),
  nutriscore_score: Joi.number(),
  nutriscore_grade: Joi.string(),
  main_category: Joi.string(),
  image_url: Joi.string()
});


export const update_product_schema = Joi.object({
  code: Joi.string(),
  status: Joi.string().valid(...Object.keys(Status)),
  imported_t: Joi.string(),
  url: Joi.forbidden(),
  creator: Joi.number(),
  created_t: Joi.string(),
  last_modified_t: Joi.number(),
  product_name: Joi.string(),
  quantity: Joi.string(),
  brands: Joi.string(),
  categories: Joi.string(),
  labels: Joi.string(),
  cities: Joi.string(),
  purchase_places: Joi.string(),
  stores: Joi.string(),
  ingredients_text: Joi.string(),
  traces: Joi.string(),
  serving_size: Joi.string(),
  serving_quantity: Joi.number(),
  nutriscore_score: Joi.number(),
  nutriscore_grade: Joi.string(),
  main_category: Joi.string(),
  image_url: Joi.string()
});
