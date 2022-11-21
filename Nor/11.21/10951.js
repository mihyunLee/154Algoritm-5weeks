const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 1
    2 3
    3 4
    9 8
    5 2`
).split("\n");

let i = 0;

while (i < input.length) {
  let [A, B] = input[i].trim().split(" ").map(Number);

  console.log(A + B);

  i++;
}
