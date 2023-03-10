const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "senvii";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "mama";
const PORT = 3001
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  NODE_ENV,
  PORT
};
