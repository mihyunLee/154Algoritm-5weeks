const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const T = Number(input.shift());

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

for (let i = 0; i < T; i++) {
  const [n, ...arr] = input[i].split(" ").map(Number);
  let sum = 0;

  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      sum += gcd(arr[j], arr[k]);
    }
  }

  console.log(sum);
}
