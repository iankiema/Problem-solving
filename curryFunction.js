function curryFunction(a) {
    return function(b) {
        return a + b
    }
}

let add5 = curryFunction(5)
console.log(add5(3))