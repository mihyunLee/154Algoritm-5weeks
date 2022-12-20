const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 2
    4 1 2 3 5`
)
  .trim()
  .split("\n");

const [N, K] = input[0].trim().split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log(arr[K - 1]);
