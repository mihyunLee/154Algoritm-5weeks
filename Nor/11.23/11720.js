const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `11
    10987654321`
).split("\n");

console.log(
  input[1]
    .split("")
    .map(Number)
    .reduce((acc, val) => acc + val)
);
