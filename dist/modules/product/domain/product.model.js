"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    stock: Number,
    likes: Number,
});
exports.ProductModel = (0, mongoose_1.model)("Product", productSchema, "products");
//# sourceMappingURL=product.model.js.map