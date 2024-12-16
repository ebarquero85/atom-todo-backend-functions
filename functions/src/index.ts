import { https } from "firebase-functions";
import express, { Request, Response } from "express";

import usersRoutes from "./routes/usersRoutes";
import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.status(200).send("<h1>API para ATOM TO-DO APP</h1>");
});

app.use("/users", usersRoutes);
app.use("/tasks", taskRoutes);

exports.api = https.onRequest(app);
