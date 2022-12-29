const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const [radix, m, num] = input;

const [A, B] = radix.split(" ").map(Number);
const nums = num.split(" ").map(Number);

let base10 = 0;
let answer = [];

for (let i = 0; i < +m; i++) {
  base10 += nums[i] * Math.pow(A, nums.length - 1 - i);
}

let temp = base10;
while (temp !== 0) {
  answer.unshift(temp % B);
  temp = Math.floor(temp / B);
}

console.log(answer.join(" "));
