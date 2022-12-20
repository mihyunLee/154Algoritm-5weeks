const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

let answer = "";

for (let i = 1; i <= Number(input[0]); i++) {
  let count = 0;

  for (let el of input[i]) {
    count += el === "(" ? 1 : -1;

    if (count < 0) break;
  }

  answer += (count === 0 ? "YES" : "NO") + "\n";
}

console.log(answer);
