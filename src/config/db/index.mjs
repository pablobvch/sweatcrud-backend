// @flow
import dotenv from "dotenv";
dotenv.config();

export default {
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  server: process.env.DATABASE_SERVER_NAME,
  dialect: "PostgreSQL",
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT),
  options: {
    encrypt: false,
    useUTC: false
  },
  pool: {
    min: 0,
    max: 10
  }
};
