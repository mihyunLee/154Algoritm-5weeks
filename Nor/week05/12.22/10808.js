const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("");

let answer = new Array("z".charCodeAt() - "a".charCodeAt() + 1).fill(0);

for (let s of input) {
  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    if (s.charCodeAt() === i) {
      answer[i - 97]++;
      break;
    }
  }
}

console.log(answer.join(" "));
