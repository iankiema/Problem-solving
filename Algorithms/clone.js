function curryFunction(a) {
    return function(b) {
        return a + b
    }
}

var add5 = curryFunction(5)

console.log(add5(3))