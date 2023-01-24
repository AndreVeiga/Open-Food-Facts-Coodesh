import Model from '@/core/models/model'
import { Status } from '@/core/types/status'

export default class ProductModel extends Model<ProductModel> {
  public code: String

  public status: Status

  public imported_t: Date

  public created_t: Date

  public last_modified_t: Date

  public url: String

  public creator: String

  public product_name: String

  public quantity: String

  public brands: String

  public categories: String

  public labels: String

  public cities: String
  
  public purchase_places: String

  public stores: String

  public ingredients_text: String

  public traces: String

  public serving_size: String

  public serving_quantity: Number

  public nutriscore_score: Number

  public nutriscore_grade: String

  public main_category: String

  public image_url: String

  protected validate(props: Partial<ProductModel>): void {
    // Method not implemented
  }
}