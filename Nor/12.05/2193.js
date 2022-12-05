const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`
);

const dp = Array.from(new Array(input + 1), () => new Array(2));

dp[1] = [0, 1];
dp[2] = [1, 0];

for (let i = 3; i <= input; i++) {
  dp[i] = [BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]), BigInt(dp[i - 1][0])];
}

console.log((BigInt(dp[input][0]) + BigInt(dp[input][1])).toString());
