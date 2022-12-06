const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
    6
    10
    13
    9
    8
    1`
)
  .split("\n")
  .map(Number);

const [n, ...amount] = input;
const dp = new Array(n + 1).fill(0);

dp[1] = amount[0];
dp[2] = amount[0] + amount[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + amount[i - 2] + amount[i - 1],
    dp[i - 2] + amount[i - 1],
    dp[i - 1]
  );
}

console.log(dp[n]);
