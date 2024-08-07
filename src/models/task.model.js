import { connectDB } from "../config/db.js";

// la función taskEntity se encargará de crear la tabla tasks en la base de datos si no existe.
// taskEntity es una función asíncrona que se conecta a la base de datos y ejecuta la consulta SQL.
export const taskEntity = async () => {
  const connection = await connectDB();
  const query = `CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        isComplete BOOLEAN DEFAULT FALSE
    )`;

  await connection.execute(query);
  console.log("Tabla creada correctamente");
};
