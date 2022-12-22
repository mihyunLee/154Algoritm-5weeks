const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().split("\n");

const regex = [/[a-z]/g, /[A-Z]/g, /[0-9]/g, /\s/g];

for (let i = 0; i < input.length; i++) {
  const str = input[i];

  let answer = [];

  if (str === "") continue;

  for (let exp of regex) {
    answer.push(str.replace(exp, "!").split("!").length - 1);
  }

  console.log(answer.join(" "));
}
