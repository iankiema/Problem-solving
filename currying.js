function unCurried(x,y) {
    return x + y
}

function curried(x) {
    return function(y) {
        return x + y
    }
}

 curried = x => y => x + y

console.log(curried(1)(2))