import { connectDB } from "../config/db.js";

export const getTasks = async (req, res) => {
  const connection = await connectDB();
  const query = `SELECT * FROM tasks`;
  const [result] = await connection.query(query);
  res.json(result);
};

export const getOneTask = async (req, res) => {
  const connection = await connectDB();
  const { id } = req.params;

  const query = `
  SELECT * FROM tasks
  WHERE id = ?`;

  const [result] = await connection.query(query, [id]);
  res.json(result);
};

export const createTask = async (req, res) => {
  const connection = await connectDB();
  const { title, description } = req.body;

  const query = `
    INSERT INTO tasks (title, description) VALUES (?, ?)`;

  const checkQuery = `
    SELECT * FROM tasks
    WHERE title = ?
    AND description = ?`;

  const [checkTask] = await connection.query(checkQuery, [title, description]);

  !checkTask.length
    ? res.status(400).send("La tarea ya existe")
    : await connection.query(query, [title, description]);
};

export const updateTask = async (req, res) => {
  const connection = await connectDB();
  const { id } = req.params;
  const { title, description } = req.body;

  const query = `
    SELECT title, description 
    FROM tasks 
    WHERE id = ?
    `;

  const updateQuery = `
    UPDATE tasks
    SET title = ?, description = ?
    WHERE id = ?`;

  const [checkTask] = await connection.query(query, [id]);

  !checkTask.length
    ? res
        .status(500)
        .send("No se puede actualizar, no se encuentra el registro.")
    : await connection.query(updateQuery, [title, description, id]);
};

export const deleteTask = async (req, res) => {
  const connection = await connectDB();

  const { id } = req.params;

  const querySelect = `
  SELECT * FROM tasks
  WHERE id = ?`;

  const queryDelete = `
  DELETE FROM tasks
  WHERE id = ?
  `;

  const [checkTask] = await connection.query(querySelect, [id]);

  !checkTask.length
    ? res.status(500).send("No se puede eliminar, no se encuentra el registro.")
    : await connection.query(queryDelete, [id]),
    res.send("Tarea eliminada.");
};
