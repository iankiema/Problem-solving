function booWho(value) {
   return typeof value === 'boolean'
}


console.log(booWho('string'))
console.log(booWho(23))
console.log(booWho(false))