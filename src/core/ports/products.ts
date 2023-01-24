import ProductModel from "@/core/models/product";

export default interface Product {
  find(): Promise<any>;
  create(productModel: ProductModel): Promise<ProductModel>
}