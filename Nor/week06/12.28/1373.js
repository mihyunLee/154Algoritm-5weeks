const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filepath).toString().trim();

let answer = "";

while (input.length > 3) {
  let str = input.slice(input.length - 3);

  answer = parseInt(str, 2).toString(8) + answer;

  input = input.slice(0, input.length - 3);
}

console.log(parseInt(input, 2).toString(8) + answer);
