import { Request, Response, Router } from "express";
import { authRepo } from "../use_case";

const authRouter = Router();

authRouter.get("/", (req: Request, res: Response) => {
  const userList = authRepo.getAll();

  userList.then((user) => {
    return res.status(201).send(user);
  });
});

authRouter.post("/", async (req: Request, res: Response) => {
  const { body: newUser } = req;
  const userResult = await authRepo.createUser(newUser);
  res.status(201).send(userResult);
});

authRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const userList = await authRepo.getById(id!);
  return res.status(201).send(userList);
});

authRouter.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body: newUser } = req;
  const userResult = await authRepo.update(id!, newUser);
  return res.status(201).send(userResult);
});

authRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const userResult = await authRepo.delete(id!);
  return res.status(201).send(userResult);
});

export { authRouter };
