const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
    21 Junkyu
    21 Dohyun
    20 Sunyoung`
)
  .trim()
  .split("\n");

const member = input.slice(1).map((el) => el.trim().split(" "));

const answer = member
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  })
  .map((el) => el.join(" "));

console.log(answer.join("\n"));
