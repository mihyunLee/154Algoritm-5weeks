const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
  5
  50 10 100 20 40
  30 50 70 10 60
  7
  10 30 10 50 100 20 40
  20 40 30 50 60 20 80`
).split("\n");

const [T, ...sticker] = input;

for (let i = 0; i < T * 3; i += 3) {
  let [n, ...score] = sticker.slice(i, i + 3);

  score = score.map((el) => el.trim().split(" ").map(Number));

  const dp = Array.from(new Array(n + 1), () => new Array(2));

  dp[0] = [0, 0];
  dp[1] = [score[0][0], score[1][0]];

  for (let j = 2; j <= n; j++) {
    dp[j] = [
      Math.max(dp[j - 1][1], dp[j - 2][1]) + score[0][j - 1],
      Math.max(dp[j - 1][0], dp[j - 2][0]) + score[1][j - 1],
    ];
  }
  console.log(Math.max(...dp[Number(n)]));
}
