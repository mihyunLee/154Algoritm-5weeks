const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 2`
).split(" ");

console.log(parseInt(stdin[0]) + parseInt(stdin[1]));
