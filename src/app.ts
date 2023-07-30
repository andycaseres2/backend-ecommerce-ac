import express, { json } from "express";
import cors from "cors";
import { initMongoConnection } from "./config";
import { routes } from "./routes/routes";

//APP
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(json());

//ROUTES
app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

//DATABASE
initMongoConnection();

//RUNNING SERVER
app.listen(5000, () => {
  console.log("listening on port 5000");
});