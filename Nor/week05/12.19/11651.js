const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    0 4
    1 2
    1 -1
    2 2
    3 3`
)
  .trim()
  .split("\n");

const arr = input.slice(1).map((el) => el.trim().split(" ").map(Number));

const answer = arr
  .sort(function (a, b) {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  })
  .map((el) => el.join(" "))
  .join("\n");

console.log(answer);
