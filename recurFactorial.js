function recurFactorial(n) {
    if (n === 1) {
        return 1
    }

    return n * recurFactorial(n - 1)
}

console.log(recurFactorial(5))