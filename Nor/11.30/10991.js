const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `4`
);

let blank = input;
let star = 0;

let answer = "";

for (let i = 1; i <= input; i++) {
  blank -= 1;
  star = i;

  answer += " ".repeat(blank) + "* ".repeat(star) + "\n";
}

console.log(answer.trimEnd());
