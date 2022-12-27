const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split(" ");

const [n1, n2] = input.map(BigInt);

function gcd(a, b) {
  return b.toString() == 0
    ? a.toString()
    : gcd(BigInt(b), BigInt(a) % BigInt(b));
}

console.log("1".repeat(gcd(n1, n2)));
