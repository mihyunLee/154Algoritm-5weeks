const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`
);

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += `${i}\n`;
}

console.log(answer);
