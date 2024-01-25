function moveZeros(arr) {
    let zero = []
    let nonZero = []
    for(let i=0; i < arr.length;i++){
      
      if (arr[i] == 0) {
        zero.push(arr[i])
      }else {
        nonZero.push(arr[i])
      }
      
    }
return nonZero.concat(zero)

    
}

console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros([1,0,2,0,4,5]))