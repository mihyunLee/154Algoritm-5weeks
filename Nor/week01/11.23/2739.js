const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `2`
);

let answer = "";

for (let i = 1; i < 10; i++) {
  answer += `${input} * ${i} = ${input * i}\n`;
}

console.log(answer);
