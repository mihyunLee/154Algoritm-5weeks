const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
  1 1
  2 3
  3 4
  9 8
  5 2`
).split("\n");

for (let i = 1; i <= input[0]; i++) {
  const [A, B] = input[i].trim().split(" ").map(Number);
  console.log(A + B);
}
