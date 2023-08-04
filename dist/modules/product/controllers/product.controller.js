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
exports.productRouter = void 0;
const express_1 = require("express");
const use_case_1 = require("../use_case");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
productRouter.get("/", (req, res) => {
    const productList = use_case_1.productRepo.getAll();
    productList.then((product) => {
        return res.status(201).send(product);
    });
});
productRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: newProduct } = req;
    const productResult = yield use_case_1.productRepo.createProduct(newProduct);
    return res.status(201).send(productResult);
}));
productRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productList = yield use_case_1.productRepo.getById(id);
    return res.status(201).send(productList);
}));
productRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body: newProduct } = req;
    const productResult = yield use_case_1.productRepo.update(id, newProduct);
    return res.status(201).send(productResult);
}));
productRouter.get("/category/:category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.params;
    const productList = yield use_case_1.productRepo.getByCategory(category);
    return res.status(201).send(productList);
}));
productRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productResult = yield use_case_1.productRepo.delete(id);
    return res.status(201).send(productResult);
}));
//# sourceMappingURL=product.controller.js.map