import mysql from "mysql2/promise";
import "dotenv/config";

export const connectDB = async () => {
try {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  });
  return connection;
} catch (err) {
  res.status(500).send("Error al conectar con la Base de Datos..")
  process.exit(1)
}
};
