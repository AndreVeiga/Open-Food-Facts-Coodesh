import { Schema, model } from 'mongoose'
import { Status } from '@/core/types/status'

const ProductSchema = new Schema({
  code: Number,
  status: {
    type: String,
    enum: Object.values(Status)
  },
  imported_t: Date,
  created_t: Date,
  last_modified_t: {
    type: Date, 
    default: Date.now
  },
  url: String,
  creator: String,
  product_name: String,
  quantity: String,
  brands: String,
  categories: String,
  labels: String,
  cities: String,
  purchase_places: String,
  stores: String,
  ingredients_text: String,
  traces: String,
  serving_size: String,
  serving_quantity: Number,
  nutriscore_score: Number,
  nutriscore_grade: String,
  main_category: String,
  image_url: String
}, {
  timestamps: true
})

export default model('product', ProductSchema)