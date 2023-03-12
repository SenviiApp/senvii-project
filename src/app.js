require("dotenv").config();
const config = require("../config");

const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");
require("./db.js");

const server = express();

server.use(cors({ credentials: true, origin: "*" }));

server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));
server.use(cookieParser());
server.use(morgan("dev"));

server.use("/api", routes);

if (config.NODE_ENV === "prod") {
  server.use(express.static(path.join(__dirname, "../client/dist")));
  server.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
