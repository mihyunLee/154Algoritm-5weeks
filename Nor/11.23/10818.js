const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
  20 10 35 30 7`
).split("\n");

const numbers = input[1].trim().split(" ").map(Number);

// Solution 1
numbers.sort((a, b) => a - b);

console.log(numbers[0], numbers[numbers.length - 1]);

// Solution 2

let min = numbers[0],
  max = numbers[0];

for (let i = 1; i < input[0]; i++) {
  if (min > numbers[i]) {
    min = numbers[i];
  }

  if (max < numbers[i]) {
    max = numbers[i];
  }
}

console.log(min, max);
