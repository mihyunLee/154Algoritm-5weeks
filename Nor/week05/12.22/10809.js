const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim();

let answer = [];

for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  answer.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer.join(" "));

// ++) 배열보다 answer을 string으로 놓고
// push 대신에 'answer +=' 을 하는 것이 시간이 더 줄어든다.