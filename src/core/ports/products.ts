import ProductModel from "@/core/models/product";

export default interface Product {
  find(limit: number, page: number): Promise<Array<ProductModel>>;
  create(productModel: ProductModel): Promise<ProductModel>
  findByCode(code: String): Promise<ProductModel>
  updateOne(clause: any, productModel: Partial<ProductModel>): Promise<void>
}