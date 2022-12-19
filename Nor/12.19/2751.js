const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    5
    4
    3
    2
    1`
)
  .trim()
  .split("\n")
  .map(Number);

const answer = input
  .slice(1)
  .sort((a, b) => a - b)
  .join("\n");

console.log(answer);
