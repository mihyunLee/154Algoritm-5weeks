const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `12
    Junkyu 50 60 100
    Sangkeun 80 60 50
    Sunyoung 80 70 100
    Soong 50 60 90
    Haebin 50 60 100
    Kangsoo 60 80 100
    Donghyuk 80 60 100
    Sei 70 70 70
    Wonseob 70 70 90
    Sanghyun 70 70 80
    nsj 80 80 80
    Taewhan 50 60 90`
)
  .trim()
  .split("\n");

const arr = input.slice(1).map((el) => el.trim().split(" "));

const sortedArr = arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  } else if (a[1] === b[1] && a[2] !== b[2]) {
    return a[2] - b[2];
  } else if (a[1] === b[1] && a[2] === b[2] && a[3] !== b[3]) {
    return b[3] - a[3];
  } else {
    for (let i = 0; i < 10; i++) {
      if (a[0].charCodeAt(i) === b[0].charCodeAt(i)) {
        continue;
      } else {
        return a[0].charCodeAt(i) - b[0].charCodeAt(i);
      }
    }
  }
});

const answer = sortedArr.map((el) => el[0]).join("\n");

console.log(answer);
