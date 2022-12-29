const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim();

let num = Number(input);
let answer = [];

if (num === 0) {
  console.log(0);
} else {
  while (num !== 0) {
    let r = num % -2;

    if (r === 0) {
      num /= -2;
      answer.unshift(0);
    } else {
      num = Math.ceil(num / -2);
      answer.unshift(1);
    }
  }

  console.log(answer.join(""));
}
