function destroyer(arr, ...args) {
    const filteredArray = arr.filter(item => !args.includes(item))
    return filteredArray
}

const result = destroyer([1,2,3,1,2,3], 2,3)
console.log(result)