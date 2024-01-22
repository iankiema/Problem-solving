function findGCD(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);

    // if (a < b) {
    //     [a,b] = [b,a]
    // }

    while (b !== 0) {
        const remainder =  b
        b = a % b
        // console.log(b)
        a = remainder
        // console.log(a)
    }

    return a
}

console.log(findGCD(48,88))