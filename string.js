function lengthOfLastWord(s) {
    let lastWord = s.trim().split(' ').pop().length

    console.log(lastWord)
}

console.log(lengthOfLastWord('I am a Kenyan '))