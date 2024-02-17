function rearrangeString(s) {
    let numbers = s.match(/\d+/g) || [];
    let letters = s.match(/[a-zA-Z]+/g) || []

    numbers = numbers.map(Number).sort((a,b) => a - b);
    letters = letters.sort();
    
    let result = [];
    for (let i = 0; i < Math.max(numbers.length, letters.length); i++) {
        if(i < numbers.length) {
            result.push(numbers[i].toString())
        }
        if (i < letters.length) {
            result.push(letters[i])
        }
    }

    return result.join("")

}


console.log(rearrangeString("z3s2c1"))