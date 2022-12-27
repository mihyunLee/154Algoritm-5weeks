const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split(" ");

const [num, radix] = input;

console.log(parseInt(num, Number(radix)));
