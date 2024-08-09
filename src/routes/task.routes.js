import { Router } from "express";
import {
  getTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/task.controller.js";
import { validationTasks } from "../validation/validations.js";
import { applyValidations } from "../middlewares/apply.validation.js";

// Creamos un router para las rutas de las tareas.
const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.get("/:id", getOneTask);
taskRouter.post("/", validationTasks, applyValidations, createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
