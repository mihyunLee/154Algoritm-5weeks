const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `Hello
    Baekjoon
    Online Judge`
).split("\n");

let answer = "";

for (let i = 0; i < input.length; i++) {
  answer += `${input[i].trim()}\n`;
}

console.log(answer);
