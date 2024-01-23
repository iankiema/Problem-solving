function linearSearch(n,t) {
    for (let i=0; i < n.length;i++) {
        // console.log(n[i])
        if (t === n[i]) {
            return i
        } 
    }
    return -1
}

console.log(linearSearch([-5,2,10,4,6],10))