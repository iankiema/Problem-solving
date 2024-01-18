function changeAds(base10) {
  // Convert the base-10 integer to binary representation
  let binaryRepresentation = base10.toString(2);
  console.log(binaryRepresentation)

  // Invert the bits (replace 0s with 1s and vice versa)
  let invertedBinaryRepresentation = binaryRepresentation.split('').map(bit => (bit === '0') ? '1' : '0').join('');

  // Convert the inverted binary representation back to base-10
  let invertedBase10 = parseInt(invertedBinaryRepresentation, 2);

  return invertedBase10;
}

// Example usage:
let base10Example = 50;
let invertedOutputExample = changeAds(base10Example);
console.log(invertedOutputExample); 
