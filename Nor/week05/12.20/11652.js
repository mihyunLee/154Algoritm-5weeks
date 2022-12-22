const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    1
    2
    1
    2
    1`
)
  .trim()
  .split("\n")
  .map((v) => BigInt(v));

const arr = input.slice(1);
arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

let count = 1;
let maxValue = arr[0];
let maxCount = 0;

arr.forEach((v, i) => {
  if (v === arr[i + 1]) {
    count++;
  } else {
    count = 1;
  }

  if (count > maxCount) {
    maxCount = count;
    maxValue = v;
  }
});

console.log(String(maxValue));
