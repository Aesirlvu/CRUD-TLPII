import { body } from "express-validator";

export const validationTasks = [
  body("title")
    .isString()
    .withMessage("El titulo debe ser string.")
    .notEmpty()
    .withMessage("No puede ser vacío."),
  body("description")
    .notEmpty()
    .withMessage("No puede ser vacío")
    .isLength({ max: 30 })
    .withMessage("Máximo 30 caracteres."),
];
