const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
  4
  7
  10`
)
  .split("\n")
  .map(Number);

const [T, ...numbers] = input;

for (let i = 0; i < T; i++) {
  const num = numbers[i];
  const dp = new Array(num + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let j = 4; j <= num; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }

  console.log(dp[num]);
}
