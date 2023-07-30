import { Model } from "mongoose";
import { BaseRepo } from "../../share";
import { ProductModel, CreateProductDto } from "../domain";

export class ProductRepo<GenericSchema> extends BaseRepo<GenericSchema> {
  constructor(model: Model<GenericSchema>) {
    super(model);
  }

  async getByCategory(category: string) {
    return this.model.find({ category });
  }

  async createProduct(product: CreateProductDto) {
    console.log("product", product);
    return await this.model.create(product);
  }
}

export const productRepo = new ProductRepo(ProductModel);
