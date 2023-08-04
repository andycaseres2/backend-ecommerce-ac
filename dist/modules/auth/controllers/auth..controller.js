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
exports.authRouter = void 0;
const express_1 = require("express");
const use_case_1 = require("../use_case");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.get("/", (req, res) => {
    const userList = use_case_1.authRepo.getAll();
    userList.then((user) => {
        return res.status(201).send(user);
    });
});
authRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: newUser } = req;
    const userResult = yield use_case_1.authRepo.createUser(newUser);
    res.status(201).send(userResult);
}));
authRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userList = yield use_case_1.authRepo.getById(id);
    return res.status(201).send(userList);
}));
authRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body: newUser } = req;
    const userResult = yield use_case_1.authRepo.update(id, newUser);
    return res.status(201).send(userResult);
}));
authRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userResult = yield use_case_1.authRepo.delete(id);
    return res.status(201).send(userResult);
}));
//# sourceMappingURL=auth..controller.js.map