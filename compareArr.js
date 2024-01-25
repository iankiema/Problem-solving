function uniqueInt(arr1,arr2) {
    let uniqueArr = []
    arr1 = arr1.sort()
    arr2 = arr2.sort()

    for (i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])){
          uniqueArr.push(arr1[i])
        }
      }
        for (i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])){
          uniqueArr.push(arr2[i])
        }
      }
    return uniqueArr
    
}

console.log(uniqueInt([1,2,3],[5,2,1,4]))