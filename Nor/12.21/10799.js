const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("");

let sticks = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const cur = input[i];

  if (cur === "(" && input[i + 1] === ")") {
    answer += sticks.length;
    i++;
  } else if (cur === "(") {
    sticks.push(cur);
  } else if (cur === ")") {
    sticks.pop();
    answer += 1;
  }
}

console.log(answer);
