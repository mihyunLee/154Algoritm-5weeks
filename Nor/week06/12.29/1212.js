const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filepath).toString().trim();

let answer = "";

while (input.length !== 0) {
  let str = input.slice(input.length - 1);

  if (input.length > 1) {
    answer = parseInt(str, 8).toString(2).padStart(3, "0") + answer;
  } else {
    answer = parseInt(str, 8).toString(2) + answer;
  }

  input = input.slice(0, input.length - 1);
}

console.log(answer);
