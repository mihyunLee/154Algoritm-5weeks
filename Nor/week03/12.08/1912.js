const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
    10 -4 3 1 5 6 -35 12 21 -1`
).split("\n");

const n = Number(input[0]);
const numbers = input[1].trim().split(" ").map(Number);

const dp = [];

for (let i = 0; i < n; i++) {
  dp[i] = numbers[i];

  if (dp[i] < dp[i - 1] + numbers[i]) {
    dp[i] = dp[i - 1] + numbers[i];
  }
}

console.log(Math.max(...dp));
