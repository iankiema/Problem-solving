
function arrayMap(array) {
    

    let newArray = array.map((item) => item * 2)

    console.log(array)
    return newArray
}

console.log(arrayMap([3,3,6,4,2]))