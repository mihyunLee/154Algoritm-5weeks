const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `3`
);

let sum = 0;

for (let i = 1; i <= input; i++) {
  sum += i;
}

console.log(sum);
