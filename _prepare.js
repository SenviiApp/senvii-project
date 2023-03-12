const fs = require("fs");

const content = fs.readFileSync("client/src/lib/axiosClient.js", "utf-8");
let newContent = content.replace('= "http://localhost:3001/api"', '= "/api"');
fs.writeFileSync("client/src/lib/axiosClient.js", newContent);
