import { connectDB } from "../config/db.js";

export const taskEntity = async () => {
  const connection = await connectDB();
  const query = `CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        isComplete BOOLEAN DEFAULT 0,
        PRIMARY KEY (id)    
    )`;

  await connection.execute(query);
  console.log("Tabla creada correctamente");
};
