const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim();

const N = Number(input);
let temp = N;

for (let i = 2; i <= N; i++) {
  if (temp % i === 0) {
    console.log(i);
    temp /= i;
    i--;
  }

  if (temp === 0) {
    break;
  }
}
