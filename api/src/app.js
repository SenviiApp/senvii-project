const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes");

require("./db.js");

const server = express();
const cors = require("cors");

server.use(cors({ origin: "http://localhost:5173", credentials: true }));
server.use(express.json());
server.use(cookieParser());
server.use(morgan("dev"));
server.use("/api", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
