function recurFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recurFibonacci(n-1) + recurFibonacci(n-2)
}

console.log(recurFibonacci(5))