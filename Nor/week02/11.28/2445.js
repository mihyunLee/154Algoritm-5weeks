const fs = require("fs");

const input =
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `5`;

for (let i = 1; i <= input * 2 - 1; i++) {
  if (i <= input) {
    console.log("*".repeat(i) + " ".repeat((input - i) * 2) + "*".repeat(i));
  } else {
    console.log(
      "*".repeat(i - (i - input) * 2) +
        " ".repeat((input - i) * 2) +
        "*".repeat(i - (i - input) * 2)
    );
  }
}
