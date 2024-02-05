function missingNumber(nums) {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;
    console.log(expectedSum)
    const actualSum = nums.reduce((sum, num) => sum + num, 0)

    return expectedSum - actualSum
}

const nums = [4,3,6,7]

const result = missingNumber(nums)

console.log(result)