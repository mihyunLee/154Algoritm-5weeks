const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    1 1
    2 3
    3 4
    9 8
    5 2`
).split("\n");

const [T, ...testCase] = input;
let answer = "";

for (let i = 0; i < T; i++) {
  const [A, B] = testCase[i].split(" ").map(Number);

  answer += `Case #${i + 1}: ${A + B}\n`;
}

console.log(answer);
