function anagram(a,b) {
    let sortedA = a.trim().replace(/[^\w]/g, '').replace(/\s/g,'').toUpperCase()
    let sortedB = b.trim().replace(/[^\w]/g, '').replace(/\s/g,'').toUpperCase()


    sortedA = sortedA.split('').sort().join('')
    sortedB = sortedB.split('').sort().join('')
 
    console.log(sortedA)
    console.log(sortedB)

   return sortedA == sortedB

}

console.log(anagram('The Morse Code','Here come dots'))