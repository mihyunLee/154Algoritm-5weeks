const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 1
    2 3
    3 4
    9 8
    5 2
    0 0`
).split("\n");

let i = 0;

while (input[i].trim() != "0 0") {
  const testCase = input[i].trim().split(" ").map(Number);

  console.log(testCase[0] + testCase[1]);

  i++;
}
