const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const N = +input[0];
const nums = input[1].split(" ").map(Number);

// 입력된 숫자의 개수만큼 count에 넣기
let count = N;

for (let i = 0; i < N; i++) {
  let num = nums[i];

  if (num === 1) {
    // 1은 소수가 아니기 때문에 소수의 개수에서 제외한다.
    count--;
  } else {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        // 2부터 num - 1까지 나누어 떨어지는 수가 있다면
        // 소수에서 제외한다.
        count--;
        break;
      }
    }
  }
}

// 소수의 개수 출력
console.log(count);
