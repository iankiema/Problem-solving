function countKSubarrays(arr, k) {
    // Initialize variables
    let count = 0;
    let sumModK = 0;
    let sumModKCounts = { 0: 1 };
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // Calculate the cumulative sum modulo k
      sumModK = (sumModK + arr[i]) % k;
  
      // Handle negative values
      if (sumModK < 0) {
        sumModK += k;
      }
  
      // If the cumulative sum modulo k is already in the map, increment the count
      if (sumModKCounts.hasOwnProperty(sumModK)) {
        count += sumModKCounts[sumModK];
      }
  
      // Update the count of the current cumulative sum modulo k
      sumModKCounts[sumModK] = (sumModKCounts[sumModK] || 0) + 1;
    }
  
    return count;
  }
  
  // Example usage
  const arr = [4, 5, 0, -2, -3, 1];
  const k = 5;
  const result = countKSubarrays(arr, k);
  console.log(`Number of ${k}-subarrays: ${result}`);
  