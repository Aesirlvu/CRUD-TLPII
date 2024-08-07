import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import taskRouter from "./src/routes/task.routes.js";
import { connectDB } from "./src/config/db.js";
import { taskEntity } from "./src/models/task.model.js";

const URL = process.env.DB_URL;
const PORT = process.env.DB_PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const startServer = async () => {
  await connectDB();

  app.get("/", (req, res) => {
    res.send("Hola mundo!💖");
  });

  app.use("/api", taskRouter);

  app.listen(PORT, async () => {
    await taskEntity();
    console.log(`Servidor en: ${URL}:${PORT}`);
  });
};
startServer();
