import { Schema, model } from "mongoose";
import { ProductEntity } from "./product.entity";

const productSchema = new Schema<ProductEntity>({
  title: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  stock: Number,
  likes: Number,
});

export const ProductModel = model("Product", productSchema, "products");
