import { Router } from "express";
import { productRouter, authRouter } from "../modules";

const routes = Router();

routes.use("/product", productRouter);
routes.use("/auth", authRouter);

export { routes };
