const fs = require("fs");

const data = fs.readFileSync("b.txt", "utf-8");
console.log(data);