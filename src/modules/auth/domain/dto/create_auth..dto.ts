import { IsString, IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { Role } from "../auth..interface";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly password: number;

  @IsString()
  readonly role: string;

  constructor(username: string, email: string, password: number, role: Role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
