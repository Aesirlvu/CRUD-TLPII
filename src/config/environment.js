import "dotenv/config";

export const environment = {
  server: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  },
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
  },

  jwt: {
    secret_key: process.env.JWT_SECRET,
  },
};
