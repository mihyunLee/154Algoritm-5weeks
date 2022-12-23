const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("");

const suffix = [];

while (input.length > 0) {
  suffix.push(input.join(""));
  input.shift();
}

console.log(suffix.sort().join("\n"));
