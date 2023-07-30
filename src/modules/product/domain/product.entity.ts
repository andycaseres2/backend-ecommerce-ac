import { ProductInterface } from "./product.interface";

export class ProductEntity implements ProductInterface {
  constructor(
    title: string,
    description: string,
    price: number,
    image: string,
    category: string,
    stock: number,
    likes: number
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.stock = stock;
    this.likes = likes;
  }

  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  likes: number;
}
