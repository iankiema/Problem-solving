function isBalanced(str){
    let result = [];

    for (let i of str) {
        if (i === '[') {
            result.push('[')
        } else if (i === ']') {
            if (result.length === 0 || result.pop() !== '[') {
                return false
            }
        }
    }
    return result.length === 0
}

console.log(isBalanced('[[]]['))