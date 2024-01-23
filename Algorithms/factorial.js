function factorial(n) {
    let factoredNum = 1

    for (let i = 1; i <= n; i++ ) {
        factoredNum *= i
        console.log(factoredNum)
    }

    return factoredNum
}

console.log(factorial(6))