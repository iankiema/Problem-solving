function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false
          for (let i = 0; i < arr.length - 1; i++) {
            
        if (arr[i] > arr[i + 1]) {
            [arr[i],arr[i + 1]] = [arr[i + 1],arr[i]]
            swapped = true
        }

    }
    } while(swapped)

      

    
    return(arr)
}

console.log(bubbleSort([8,20,-2,4,-6]))