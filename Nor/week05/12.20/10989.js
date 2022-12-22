// 백준에서는 Node.js로 메모리 초과 발생 -> 풀 수 없음
// 계수정렬 알고리즘을 배울 수 있는 문제이다.
const fs = require("fs");

const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
  5
  2
  3
  1
  4
  2
  3
  5
  1
  7`
)
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.map(Number);

let arrange = new Array(Math.max(...arr)).fill(0);
let answer = "";

// 주어진 배열에 해당하는 수를 인덱스로 설정하여
// 해당 인덱스의 값을 1씩 증가시킨다.
for (let i = 0; i < N; i++) {
  arrange[arr[i] - 1]++;
}

for (let i = 0; i < arrange.length; i++) {
  if (arrange[i] !== 0) {
    for (let j = 0; j < arrange[i]; j++) {
      answer += i + 1 + "\n";
    }
  }
}

console.log(answer);
