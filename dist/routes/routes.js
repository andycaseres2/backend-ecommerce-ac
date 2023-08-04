"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const modules_1 = require("../modules");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/product", modules_1.productRouter);
routes.use("/auth", modules_1.authRouter);
//# sourceMappingURL=routes.js.map