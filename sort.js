// function ascendingOrder(arr) {
//     return arr.sort(function(a,b) {
//         return a - b
//     })
// }

// console.log(ascendingOrder([1,5,2,3,4]))

function alphabeticalOrder(arr) {
    return arr.sort(function(a,b) {
        return a === b ? 0 : b < a ? 1 : -1
    })
}

console.log(alphabeticalOrder(["a","d","c","a","z","g"]))