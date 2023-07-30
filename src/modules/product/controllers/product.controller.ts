import { Request, Response, Router } from "express";
import { productRepo } from "../use_case";

const productRouter = Router();

productRouter.get("/", (req: Request, res: Response) => {
  const productList = productRepo.getAll();

  productList.then((product) => {
    return res.status(201).send(product);
  });
});

productRouter.post("/", async (req: Request, res: Response) => {
  const { body: newProduct } = req;

  const productResult = await productRepo.createProduct(newProduct);
  return res.status(201).send(productResult);
});

productRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const productList = await productRepo.getById(id!);
  return res.status(201).send(productList);
});

productRouter.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body: newProduct } = req;
  const productResult = await productRepo.update(id!, newProduct);
  return res.status(201).send(productResult);
});

productRouter.get(
  "/category/:category",
  async (req: Request, res: Response) => {
    const { category } = req.params;
    const productList = await productRepo.getByCategory(category!);
    return res.status(201).send(productList);
  }
);

productRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const productResult = await productRepo.delete(id!);
  return res.status(201).send(productResult);
});

export { productRouter };
