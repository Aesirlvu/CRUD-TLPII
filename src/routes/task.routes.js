import { Router } from "express";
import {
  getTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/task.controller.js";

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.post("/", createTask);
taskRouter.get("/:id", getOneTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
