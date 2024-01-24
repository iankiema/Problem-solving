const set = new Set([1,2,3])

set.add(4)
set.add(1)

console.log(set.size)
console.log(set.has(2))
for (const item of set){
    console.log(item)
}