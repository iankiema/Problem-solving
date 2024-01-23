function fibonacci(n) {
  const fib = [0,1]
  let count = 1

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
    count += fib[i]
  }



  return count
}

// console.log(fibonacci(2))
// console.log(fibonacci(3))
console.log(fibonacci(7))