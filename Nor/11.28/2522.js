const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `3`
);

let result1 = [];
let result2 = [];

for (let i = 1; i <= input; i++) {
  result1.push(" ".repeat(input - i) + "*".repeat(i));
}

result2 = result1.slice().reverse().slice(1);

console.log(result1.concat(result2).join("\n"));
