function countPerms(n) {
    const MOD = 1000000007;
    
    // Initialize a 2D array to store the counts
    const dp = Array.from({ length: n + 1 }, () => Array(5).fill(0));

    // Initialize base cases
    for (let j = 0; j < 5; j++) {
        dp[1][j] = 1;
    }

    // Populate the dp array based on the rules
    for (let i = 2; i <= n; i++) {
        dp[i][0] = (dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][4]) % MOD;
        dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
        dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % MOD;
        dp[i][3] = (dp[i - 1][2]) % MOD;
        dp[i][4] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
    }

    // Sum up the counts for all vowels at position n
    let result = 0;
    for (let j = 0; j < 5; j++) {
        result = (result + dp[n][j]) % MOD;
    }

    return result;
}

const n = 1;
const result = countPerms(n);
console.log(result);  // Output: 68