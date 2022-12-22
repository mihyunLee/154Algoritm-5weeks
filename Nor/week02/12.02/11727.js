const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `8`
);

const DP = new Array(input + 1).fill(0);

DP[1] = 1;
DP[2] = 3;

for (let i = 3; i <= input; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2] * 2) % 10007;
}

console.log(DP[input]);
