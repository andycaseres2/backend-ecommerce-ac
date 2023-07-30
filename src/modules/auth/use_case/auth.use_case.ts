import { Model } from "mongoose";
import { CreateUserDto, UserModel } from "../domain";
import { BaseRepo } from "../../share";

export class AuthRepo<GenericShema> extends BaseRepo<GenericShema> {
  constructor(model: Model<GenericShema>) {
    super(model);
  }

  async createUser(user: CreateUserDto) {
    console.log("user", user);
    return await this.model.create(user);
  }
}

export const authRepo = new AuthRepo(UserModel);
