const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = require("./config.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, "0.0.0.0", () => {
    console.log("ready at " + PORT);
  });
});
