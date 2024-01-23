// function isPowerOfTwoBitwise(n) {
//     if (n < 1) {
//         return false
//     }
//     console.log(n &(n-1))
//     return (n & (n-1)) === 0
// }

function isPowerOfTwo(n) {

    if (n < 1) {
        return false
    }

    // for (let i = 1; i < n; i++) {
    //     console.log(Math.pow(i,2))
    //     if (Math.pow(i,2) === n) {
    //         return true
    //     }
    // }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }

        n = n/2
      
    }
  

    return true
}

console.log(isPowerOfTwo(36))