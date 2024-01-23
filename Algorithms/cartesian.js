function cartesian(a,b) {
let abSet = []

for (let i = 0; i < a.length; i++){
    for (let j = 0; j < b.length; j++){
        abSet.push([a[i],b[j]])
    }
}
return abSet
}

console.log(cartesian([1,2],[3,4]))