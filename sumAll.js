function sumAll(arr) {
    const min = Math.min(...arr);
    console.log(min)
    const max = Math.max(...arr);
    console.log(max)
    const range = Array.from({length: max - min + 1}, (_,index) => min + index)

    console.log(range)

    const sum = range.reduce((acc, num) => acc + num, 0)

    return sum
}

console.log(sumAll([1,4]))