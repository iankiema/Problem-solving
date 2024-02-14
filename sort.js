function ascendingOrder(arr) {
    return arr.sort(function(a,b) {
        return a - b
    })
}

console.log(ascendingOrder([1,5,2,3,4]))