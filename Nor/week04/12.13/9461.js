const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
  3
  12`
)
  .split("\n")
  .map(Number);

const [T, ...arr] = input;

for (let i = 0; i < T; i++) {
  const n = arr[i];
  const dp = new Array(n + 1).fill(1);

  for (let j = 4; j <= n; j++) {
    dp[j] = dp[j - 2] + dp[j - 3];
  }

  console.log(dp[n]);
}
