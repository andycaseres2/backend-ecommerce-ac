"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
var CreateProductDto = /** @class */ (function () {
    function CreateProductDto(title, description, price, image, category, stock, likes) {
        if (likes === void 0) { likes = 0; }
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
        this.stock = stock;
        this.likes = likes;
    }
    return CreateProductDto;
}());
exports.CreateProductDto = CreateProductDto;
