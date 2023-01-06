const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const maxVal = Math.max(...input);

let result = [];

const isPrimeNumber = new Array(maxVal + 1).fill(true);

isPrimeNumber[0] = isPrimeNumber[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(maxVal)); i++) {
  if (!isPrimeNumber[i]) {
    continue;
  }

  for (let j = i * 2; j <= maxVal; j += i) {
    isPrimeNumber[j] = false;
  }
}

let i = 0;
while (input[i] !== 0) {
  const current = input[i];

  const primeNumbers = [];

  for (let j = 3; j <= current; j += 2) {
    if (isPrimeNumber[j] && isPrimeNumber[current - j]) {
      result.push(`${current} = ${j} + ${current - j}`);
      break;
    }
  }

  i++;
}

console.log(result.join("\n"));
