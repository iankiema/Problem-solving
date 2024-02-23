function diffArray(arr1,arr2) {
    const combinedArray = arr1.concat(arr2);
    console.log(combinedArray)

    const newArr = combinedArray.filter(item => !arr1.includes(item) || !arr2.includes(item))

    return newArr
}
console.log(diffArray([1,2,3,5],[1,2,3,4,5]))