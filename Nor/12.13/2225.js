const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6 4`
)
  .split(" ")
  .map(Number);

const [n, k] = input;

const dp = Array.from(new Array(k + 1).fill(1), () => new Array(n + 1).fill(1));

for (let i = 2; i <= k; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] = dp[i - 1]
      .slice(0, j + 1)
      .reduce((acc, v) => (acc + v) % 1000000000);
  }
}

console.log(dp[k][n]);
