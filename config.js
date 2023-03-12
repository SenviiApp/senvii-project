require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3001;

const CLIENT_URL = process.env.CLIENT_URL;
// DB
const DB_URL = process.env.DB_URL;
const DEV_DB_URL = process.env.DEV_DB_URL;

module.exports = {
  DB_URL,
  DEV_DB_URL,
  PORT,
  NODE_ENV,
  CLIENT_URL,
};
