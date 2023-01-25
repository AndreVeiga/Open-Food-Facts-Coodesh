import { Status } from "@/core/types/status"

export const fake_product = (data?: any) => {
  return {
    code: '123456789',
    status: Status.draft,
    imported_t: new Date(),
    created_t: new Date(),
    last_modified_t: new Date(),
    url:'www.url.com.br',
    creator: 'name_creator',
    product_name: 'name_product',
    quantity: 'quantity',
    brands: 'brands',
    categories: 'categories',
    labels: 'labels',
    cities: 'cities',
    purchase_places: 'purchase_places',
    stores: 'stores',
    ingredients_text: 'ingredients_text',
    traces: 'traces',
    serving_size: 'serving_size',
    serving_quantity: 1,
    nutriscore_score: 1,
    nutriscore_grade: 'nutriscore_grade',
    main_category: 'main_category',
    image_url: 'www.image_url.com',
    ...data
  }
}