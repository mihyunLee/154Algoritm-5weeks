const fs = require("fs");

const input =
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`;

for (let i = 0; i < input; i++) {
  console.log("*".repeat(input - i));
}
