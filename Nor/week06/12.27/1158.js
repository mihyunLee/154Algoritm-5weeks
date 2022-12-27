const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().split(" ");

const [N, K] = input.map(Number);

const queue = [];
const answer = [];

// N명의 사람 배열 채우기
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

// K번째 수라면 정답에, 그렇지 않다면 다시 queue에 push
let count = 1;
while (queue.length) {
  const shiftItem = queue.shift();

  if (count % K === 0) {
    answer.push(shiftItem);
  } else {
    queue.push(shiftItem);
  }
  count += 1;
}

console.log(`<${answer.join(", ")}>`);
