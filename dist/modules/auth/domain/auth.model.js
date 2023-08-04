"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
});
exports.UserModel = (0, mongoose_1.model)("User", userSchema, "users");
