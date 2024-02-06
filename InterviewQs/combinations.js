function generateCombinations(m, n) {
    const result = []

    function backtrack(start, currentCombination) {
        if (currentCombination.length === m) {
            result.push([...currentCombination])
            return;
        }

        for (let i = start; i < n; i++){
            currentCombination.push(i)
            backtrack(i + 1, currentCombination)
            currentCombination.pop();
        }
    }

    backtrack(0, [])

    return result
}

// Example usage
const m = 3;
const n = 5;
const combinations = generateCombinations(m, n);

// Print each combination line by line
combinations.forEach(combination => {
  console.log(combination.join(' '));
});