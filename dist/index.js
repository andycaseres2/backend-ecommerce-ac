"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const routes_1 = require("./routes/routes");
//APP
const app = (0, express_1.default)();
//MIDDLEWARES
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//ROUTES
app.get("/test", (req, res) => {
    res.send("Hello World!");
});
app.use("/api", routes_1.routes);
//DATABASE
(0, config_1.initMongoConnection)();
//RUNNING SERVER
module.exports = app;
//# sourceMappingURL=index.js.map