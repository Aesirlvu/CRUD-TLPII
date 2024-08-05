import express from "express";
import morgan from "morgan";
import taskRouter from "./src/routes/task.routes.js";
import { connectDB } from "./src/config/db.js";
import { taskEntity } from "./src/models/task.model.js";

const URL = "http://localhost";
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const startServer = async () => {
  await connectDB();

  app.get("/", (req, res) => {
    res.send("Hola mundo!");
  });

  app.use("/tasks", taskRouter);

  app.listen(PORT, async () => {
    await taskEntity();
    console.log(`Servidor en: ${URL}:${PORT}`);
  });
};
startServer();
