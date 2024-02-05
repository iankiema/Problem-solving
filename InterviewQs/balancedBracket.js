function isBalanced(str) {
    const stack = []

    for (const char of str) {
        if (char === '[') {
            stack.push(char)
        } else if (char === ']'){
            if (stack.pop() !== '[') {
                return false;
            }
        }
    }
    return stack.length === 0
}

console.log(isBalanced("[]"));       // true
console.log(isBalanced("]["));       // false
console.log(isBalanced("[][]"));     // true
console.log(isBalanced("][]"));       // false
console.log(isBalanced("[]][[]"));   // false
console.log(isBalanced("[[[[]]]]")); // true