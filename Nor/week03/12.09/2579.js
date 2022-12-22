const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
10
20
15
25
10
20`
).split("\n");

const [n, ...stairs] = input.map(Number);
const dp = new Array(n).fill(0);

dp[0] = stairs[0];
dp[1] = stairs[0] + stairs[1];
dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 3] + stairs[i - 1], dp[i - 2]) + stairs[i];
}

console.log(dp[n - 1]);
