const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const deck = [];

let answer = [];

for (let i = 1; i <= Number(input[0]); i++) {
  const [command, num] = input[i].split(" ");

  switch (command) {
    case "push_front":
      deck.unshift(+num);
      break;
    case "push_back":
      deck.push(+num);
      break;
    case "pop_front":
      answer.push(deck.length > 0 ? deck.shift() : -1);
      break;
    case "pop_back":
      answer.push(deck.length > 0 ? deck.pop() : -1);
      break;
    case "size":
      answer.push(deck.length);
      break;
    case "empty":
      answer.push(deck.length === 0 ? 1 : 0);
      break;
    case "front":
      answer.push(deck.length === 0 ? -1 : deck.at(0));
      break;
    case "back":
      answer.push(deck.length === 0 ? -1 : deck.at(-1));
      break;
  }
}

console.log(answer.join("\n"));
