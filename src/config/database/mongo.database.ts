import mongoose from "mongoose";

const DB_URL = "mongodb://127.0.0.1:27017";
const DB_NAME = "ecommerceac";

export async function initMongoConnection() {
  await mongoose
    .connect(`${DB_URL}/${DB_NAME}`)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.log(`MongoDB connection error:`);
      console.log(err);
    });
}
//c
