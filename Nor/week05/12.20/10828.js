const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

let stack = [];
let answer = [];

for (let i = 1; i <= Number(input[0]); i++) {
  const [command, num] = input[i].split(" ");

  switch (command) {
    case "push":
      stack.push(+num);
      break;
    case "pop":
      answer.push(stack.length > 0 ? stack.pop() : -1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      answer.push(stack.length === 0 ? -1 : stack.at(-1));
      break;
  }
}

console.log(answer.join("\n"));
