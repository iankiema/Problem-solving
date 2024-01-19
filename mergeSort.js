function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {

    let arrSorted = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0] ) {
            arrSorted.push(leftArr.shift())
        } else {
            arrSorted.push(rightArr.shift())
        }
    }
    return [...arrSorted, ...leftArr, ...rightArr]
}



console.log(mergeSort([5,-6,4,3,8,4,-3]))