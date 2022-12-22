const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("");

let answer = "";

const capitalRegex = /[A-Z]/g;
const smallRegex = /[a-z]/g;

// a - 97, z - 122, A - 65, Z - 90
for (let s of input) {
  const uniCode = s.charCodeAt(0) + 13;
  const rot = String.fromCharCode(uniCode);

  // 소문자 일 때
  if (s.match(smallRegex)) {
    if (uniCode > 122) {
      answer += String.fromCharCode(uniCode - 26);
      continue;
    }
    answer += rot;
  }
  // 대문자 일 때
  else if (s.match(capitalRegex)) {
    if (uniCode > 90) {
      answer += String.fromCharCode(uniCode - 26);
      continue;
    }
    answer += rot;
  }
  // 문자가 아닐 때
  else {
    answer += s;
  }
}

console.log(answer);
