function moveZeros(arr) {
//     let zero = []
//     let nonZero = []
//     for(let i=0; i < arr.length;i++){
      
//       if (arr[i] == 0) {
//         zero.push(arr[i])
//       }else {
//         nonZero.push(arr[i])
//       }
      
//     }
// return nonZero.concat(zero)

let left = 0;
let right = 0;

while (right < arr.length) {
  if(arr[right] !== 0) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
  }
  right++
}

return arr
    
}

console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros([1,0,2,0,4,5]))