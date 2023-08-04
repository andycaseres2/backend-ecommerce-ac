"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepo = exports.ProductRepo = void 0;
const share_1 = require("../../share");
const domain_1 = require("../domain");
class ProductRepo extends share_1.BaseRepo {
    constructor(model) {
        super(model);
    }
    getByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({ category });
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("product", product);
            return yield this.model.create(product);
        });
    }
}
exports.ProductRepo = ProductRepo;
exports.productRepo = new ProductRepo(domain_1.ProductModel);
//# sourceMappingURL=product.use_case.js.map