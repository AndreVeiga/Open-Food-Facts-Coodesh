import ProductModel from "@/core/models/product";

export default interface Product {
  find(clause?: any): Promise<Array<ProductModel>>;
  create(productModel: ProductModel): Promise<ProductModel>
  findOne(model: Partial<ProductModel>): Promise<ProductModel>
  updateOne(clause: any, productModel: Partial<ProductModel>): Promise<ProductModel>
}