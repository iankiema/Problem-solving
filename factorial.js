function factorial(n) {
    let sum = 1

    let i = 1

    while (i <= n) {
        sum = sum * i
        i = i + 1
    }


    return sum

}

console.log(factorial(5))