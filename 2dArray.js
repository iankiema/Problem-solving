// let MathScore = [
//     ['John Doe', 20, 60,'A'],
//     ['Jane Doe', 10, 52,'B'],
//     ['Petr Chess', 5, 24,'F'],
//     ['Ling Jess', 28, 43,'A'],
//     ['Ben Liard', 16, 51,'B'],
// ];

// let numberArr = [
//     [10, 20, 60],
//     [8, 10, 52],
//     [15, 5, 24],
//     [26, 28, 43],
//     [12, 16, 51]
//   ];

// let sum = 0

// numberArr.forEach((row) => {
//     row.forEach((element) => {
//         sum += element
//     })
// })

// MathScore.push(['Tom Right', 30, 32, 'B'])
// MathScore.unshift(['Alice George', 28, 62, 'A'])


// MathScore.forEach((score) => {
//     let totalScore = score[1] + score[2]
//     score.push(totalScore)
// })

// MathScore.forEach((score) => {
//     score.pop()
// })

// MathScore.splice(3,1,['Alice George', 28, 62, 'A'])

// console.log(MathScore)
// console.table(MathScore)


// let arr = []
// let rows = 4;
// let columns = 3;

// let value = 0

// for (let i = 0;i < rows; i++){
//     arr[i] = [];
//     for(let j = 0; j < columns; j++) {
//         arr[i][j] = value++
//     }
// }

// console.log(arr)
// console.table(arr)

function create2Darr(rows,columns) {
    let arr = []
    let value = 0

    for (let i = 0; i < rows; i++) {
        arr[i] = []

        for (let j = 0; j < columns; j++) {
            arr[i][j] = value++
        }
    }
    return arr
}

console.log(create2Darr(3,4))
console.table(create2Darr(4,5))
