import { Model } from "mongoose";

export class BaseRepo<GenericSchema> {
  model: Model<GenericSchema>;
  constructor(model: Model<GenericSchema>) {
    this.model = model;
  }

  async create(input: any) {
    return this.model.create(input);
  }

  async getAll() {
    return this.model.find();
  }

  async getById(id: string) {
    return this.model.findById(id);
  }

  async update(id: string, input: any) {
    return this.model.findByIdAndUpdate(id, input, { new: true });
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
