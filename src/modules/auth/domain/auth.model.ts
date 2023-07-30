import { Schema, model } from "mongoose";
import { UserEntity } from "./auth..entity";

const userSchema = new Schema<UserEntity>({
  username: String,
  email: String,
  password: String,
  role: String,
});

export const UserModel = model("User", userSchema, "users");
