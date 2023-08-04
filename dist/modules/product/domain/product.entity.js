"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
var ProductEntity = /** @class */ (function () {
    function ProductEntity(title, description, price, image, category, stock, likes) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
        this.stock = stock;
        this.likes = likes;
    }
    return ProductEntity;
}());
exports.ProductEntity = ProductEntity;
