const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `11`
);

const dp = [];

dp[0] = 0;

for (let i = 1; i <= input; i++) {
  dp[i] = i;

  for (let j = 1; j ** 2 <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp[input]);
