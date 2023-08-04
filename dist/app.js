"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var config_1 = require("./config");
var routes_1 = require("./routes/routes");
//APP
var app = (0, express_1.default)();
//MIDDLEWARES
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//ROUTES
app.get("/test", function (req, res) {
    res.send("Hello World!");
});
app.use("/api", routes_1.routes);
//DATABASE
(0, config_1.initMongoConnection)();
//RUNNING SERVER
app.listen(5000, function () {
    console.log("listening on port 5000");
});
