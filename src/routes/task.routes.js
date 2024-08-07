import { Router } from "express";
import {
  getTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/task.controller.js";

// Creamos un router para las rutas de las tareas.
const taskRouter = Router();

taskRouter.get("/tasks", getTasks);
taskRouter.get("/task/:id", getOneTask);
taskRouter.post("/task", createTask);
taskRouter.put("/task/:id", updateTask);
taskRouter.delete("/task/:id", deleteTask);

export default taskRouter;
