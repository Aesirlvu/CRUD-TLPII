import mysql from "mysql2/promise";
import "dotenv/config";

// exportamos la función connectDB que se encargará de realizar la conexión a la base de datos.
export const connectDB = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  });
  return connection;
};
