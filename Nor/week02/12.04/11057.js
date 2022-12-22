const fs = require('fs');
const input = Number(process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : '2');

const dp = [[], new Array(10).fill(1)];

for(let i = 2; i <= input; i++){
    dp[i] = [];
    dp[i][0] = dp[i-1][0] % 10007;
    for(let j = 1; j < 10; j++){
    	dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % 10007;    
    }
}

console.log(dp[input].reduce((a,v)=> a + v, 0) % 10007);
