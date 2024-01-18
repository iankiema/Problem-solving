function binarySearch(arr,target) {

    let sortedArr = arr.sort((a,b) => a - b)
    let firstIndex = 0;
    let lastIndex = sortedArr.length - 1;


    while(firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex)/2)

        if (target === sortedArr[middleIndex]) {
            return middleIndex
        }

        if (target < sortedArr[middleIndex]) {
            lastIndex = middleIndex - 1
        } else {
            firstIndex = middleIndex + 1
        }


    }

    return -1
}
console.log(binarySearch([-5,2,4,6,10,67],10)) //4
console.log(binarySearch([-5,2,4,6,10, 67],4)) ///2
console.log(binarySearch([-5,2,4,6,10, 67],2)) //1
// 5 2 4 6 10
// 0 1 2 3 4