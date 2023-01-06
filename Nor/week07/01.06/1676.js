const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim();

const N = Number(input);

function factorial(n) {
  if (n === 0) {
    return 1n;
  } else {
    return BigInt(n) * factorial(n - 1);
  }
}

let factorialN = String(factorial(N)).split("");

let count = 0;

while (+factorialN[factorialN.length - 1] === 0) {
  let lastNum = +factorialN.pop();

  if (lastNum === 0) {
    count++;
  } else {
    break;
  }
}

console.log(count);
