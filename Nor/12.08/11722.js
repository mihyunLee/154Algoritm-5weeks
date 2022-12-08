const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
    10 30 10 20 20 10`
).split("\n");

const n = Number(input[0]);
const numbers = input[1].trim().split(" ").map(Number);

const dp = new Array(n).fill(0);

for (let i = 1; i < n; i++) {
  let max = 0;

  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      max = Math.max(max, dp[j]);
    }
  }

  dp[i] = max + 1;
}

console.log(Math.max(...dp));
