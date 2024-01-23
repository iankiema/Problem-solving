function combinations(m, n) {
    let result = [];

    function generateCombination(start, currentCombination) {
        if (currentCombination.length === m) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i < n; i++) {
            currentCombination.push(i);
            generateCombination(i + 1, currentCombination);
            currentCombination.pop();
        }
    }

    generateCombination(0, []);

    return result;
}

const result = combinations(3, 5);
console.log(result);