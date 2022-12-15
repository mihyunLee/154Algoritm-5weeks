const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    1 5 6 7`
).split("\n");

const [n, p] = input;

const prices = p.trim().split(" ").map(Number);

const dp = new Array(Number(n) + 1).fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + prices[j - 1]);
  }
}

console.log(dp[n]);
