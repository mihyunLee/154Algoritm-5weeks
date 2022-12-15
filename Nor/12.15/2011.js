const fs = require("fs");

// input에서 trim() 해주지 않으면 백준에서 에러
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `121074110`
)
  .trim()
  .split("");

const dp = new Array(input.length + 1).fill(0);
const mod = 1000000;

dp[0] = 1;
dp[1] = 1;

if (input[0] == 0) {
  // 입력이 0으로 시작하여 암호를 해석할 수 없는 경우
  console.log(0);
} else {
  for (let i = 2; i <= input.length; i++) {
    const cur = Number(input[i - 1]);
    const cur2 = Number(input[i - 2]) * 10 + cur;

    if (cur > 0 && cur <= 10) {
      dp[i] += dp[i - 1] % mod;
    }

    if (cur2 >= 10 && cur2 <= 26) {
      dp[i] += dp[i - 2] % mod;
    }
  }
  console.log(dp[input.length] % mod);
}
