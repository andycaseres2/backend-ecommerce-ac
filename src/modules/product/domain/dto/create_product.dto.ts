import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  IsPositive,
} from "class-validator";

export class CreateProductDto {
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsUrl()
  readonly image: string;

  @IsNotEmpty()
  @IsString()
  readonly category: string;

  @IsNotEmpty()
  @IsNumber()
  readonly stock: number;

  @IsNumber()
  readonly likes: number = 0;

  constructor(
    title: string,
    description: string,
    price: number,
    image: string,
    category: string,
    stock: number,
    likes: number = 0
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.stock = stock;
    this.likes = likes;
  }
}
