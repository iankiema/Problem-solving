function symetricDifference(arr1, arr2){
    const uniqueArr1 = arr1.filter(item => !arr2.includes(item))
    const uniqueArr2 = arr2.filter(item => !arr1.includes(item))

    return [...uniqueArr1,...uniqueArr2]
}

console.log(symetricDifference([1,2,3],[5,2,1,4]))