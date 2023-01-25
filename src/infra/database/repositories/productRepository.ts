import ProductModel from "@/core/models/product";
import Product from "@/core/ports/products";
import ProductSchema from '@/infra/database/schemas/product'

export class ProductRepository implements Product {
  public async find(limit: number, page: number): Promise<any> {
    const products = await ProductSchema
    .find()
    .limit(limit * 1)
    .skip((page - 1) * limit);

    const count = await ProductSchema.countDocuments()

    return {
      data: products,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    }
  }
  
  public async create(productModel: ProductModel): Promise<ProductModel> {
    const result = await ProductSchema.create(productModel)
    return result as any
  }

  public async findByCode(code: String): Promise<ProductModel> {
    const result = await ProductSchema.findOne({ code })
    return result as any
  }

  public async updateOne(clause: any, productModel: Partial<ProductModel>): Promise<void> {
    await ProductSchema.updateOne(clause, productModel)
  }
}
