const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`
);

let answer = "";

for (let i = 0; i < input; i++) {
  answer += "*";
  console.log(answer);
}
