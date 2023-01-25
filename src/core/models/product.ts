import Model from '@/core/models/model'
import { Status } from '@/core/types/status'

export default class ProductModel extends Model<ProductModel> {
  public code: string

  public status: Status

  public imported_t: Date

  public created_t: Date

  public last_modified_t: Date

  public url: string

  public creator: string

  public product_name: string

  public quantity: string

  public brands: string

  public categories: string

  public labels: string

  public cities: string
  
  public purchase_places: string

  public stores: string

  public ingredients_text: string

  public traces: string

  public serving_size: string

  public serving_quantity: Number

  public nutriscore_score: Number

  public nutriscore_grade: string

  public main_category: string

  public image_url: string

  protected validate(props: Partial<ProductModel>): void {
    // Method not implemented
  }
}