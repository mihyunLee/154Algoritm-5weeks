const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const queue = [];

let answer = [];

for (let i = 1; i <= Number(input[0]); i++) {
  const [command, num] = input[i].split(" ");

  switch (command) {
    case "pop":
      answer.push(queue.length > 0 ? queue.shift() : -1);
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      answer.push(queue.length === 0 ? 1 : 0);
      break;
    case "front":
      answer.push(queue.length === 0 ? -1 : queue.at(0));
      break;
    case "back":
      answer.push(queue.length === 0 ? -1 : queue.at(-1));
      break;
    default:
      queue.push(+num);
  }
}

console.log(answer.join("\n"));
