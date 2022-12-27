const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const T = Number(input.shift());

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

for (let i = 0; i < T; i++) {
  const arr = input[i].split(" ").map(Number);

  console.log(lcm(arr[0], arr[1]));
}
