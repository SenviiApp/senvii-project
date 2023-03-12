const fs = require("fs");

const content = fs.readFileSync("client/src/lib/axiosClient.js", "utf-8");
let newContent = content.replace('= "/api"', '= "http://localhost:3001/api"');
fs.writeFileSync("client/src/lib/axiosClient.js", newContent);
