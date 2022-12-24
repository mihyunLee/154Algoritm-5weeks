const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const str = input.shift();
const N = input.shift();

const leftStr = str.split("");
const rightStr = [];

for (let i = 0; i < N; i++) {
  const [command, char] = input[i].split(" ");

  switch (command) {
    case "L":
      if (leftStr.length) rightStr.push(leftStr.pop());
      break;
    case "D":
      if (rightStr.length) leftStr.push(rightStr.pop());
      break;
    case "B":
      if (leftStr.length) leftStr.pop();
      break;
    case "P":
      leftStr.push(char);
      break;
  }
}

console.log(leftStr.concat(rightStr.reverse()).join(""));
