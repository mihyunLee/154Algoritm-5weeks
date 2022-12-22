const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`
);

let result = [];
let reverseResult = [];

let blank = 0;
let star = input * 2 - 1;

for (let i = 1; i <= input; i++) {
  result.push(" ".repeat(blank) + "*".repeat(star));

  blank = i;
  star -= 2;
}

reverseResult = result.slice(0, -1).reverse().join("\n");
console.log(result.join("\n"));
console.log(reverseResult);
