function moveZeros(arr){
    let right = 0
    let left = 0

    while(right < arr.length){
        if (arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right],arr[left]]
            left++
        }
        right++
    }
    return arr
}

console.log(moveZeros([1,3,5,0,5,0,3]))