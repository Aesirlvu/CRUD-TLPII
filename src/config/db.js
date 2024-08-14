import mysql from "mysql2/promise";
import { environment } from "./environment.js";

export const connectDB = async () => {
  const connection = await mysql.createConnection({
    host: environment.database.host,
    user: environment.database.user,
    database: environment.database.name,
    password: environment.database.pass,
  });
  return connection;
};
