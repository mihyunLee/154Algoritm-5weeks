const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
    1 100 2 50 60 3 5 6 7 8`
).split("\n");

const n = Number(input[0]);
const sequence = input[1].trim().split(" ").map(Number);
const dp = [];

for (let i = 0; i < n; i++) {
  dp[i] = sequence[i];

  for (let j = 0; j < i; j++) {
    if (sequence[i] > sequence[j] && dp[i] < dp[j] + sequence[i]) {
      dp[i] = dp[j] + sequence[i];
    }
  }
}

console.log(Math.max(...dp));
