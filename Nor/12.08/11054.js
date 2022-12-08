const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
    1 5 2 1 4 3 4 5 2 1`
).split("\n");

const n = Number(input[0]);
const numbers = input[1].trim().split(" ").map(Number);

const increaseDP = new Array(n).fill(1);
const decreaseDP = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  let max = 0;

  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      max = Math.max(max, increaseDP[j]);
    }
  }

  increaseDP[i] = max + 1;
}

for (let i = n - 1; i >= 0; i--) {
  let max = 0;

  for (let j = i + 1; j < n; j++) {
    if (numbers[i] > numbers[j]) {
      max = Math.max(max, decreaseDP[j]);
    }
  }

  decreaseDP[i] = max + 1;
}

console.log(
  Math.max(...increaseDP.map((incDP, index) => incDP + decreaseDP[index])) - 1
);
