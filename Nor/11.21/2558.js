const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1
    2`
).split("\n");

console.log(parseInt(input[0]) + parseInt(input[1]));
