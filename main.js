import cors from "cors";
import express from "express";
import morgan from "morgan";
import { connectDB } from "./src/config/db.js";
import { environment } from "./src/config/environment.js";
import { taskEntity } from "./src/models/task.model.js";
import taskRouter from "./src/routes/task.routes.js";

const URL = environment.server.host;
const PORT = environment.server.port;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const startServer = async () => {
  await connectDB();

  app.get("/", (req, res) => {
    res.send("Hola mundo!💖");
  });

  app.use("/tasks", taskRouter);

  app.listen(PORT, async () => {
    await taskEntity();
    console.log(`Servidor en: ${URL}:${PORT}`);
  });
};
startServer();
