function splitify(str) {
    let newStr = str.split(/[^a-zA-Z]+/)
    return newStr.join(" ")
}

console.log(splitify('Hello World, I-am code'))