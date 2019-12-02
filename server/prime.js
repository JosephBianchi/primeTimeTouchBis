const medianOf = (arr) => {
  const length = arr.length;
  const isOddlength = (length % 2) !== 0;
  if (isOddlength) {
    const middle = Math.floor(Math.floor(length / 2))
    return [
      arr[middle]
    ]
  } else if (!isOddlength) {
    const middle = length / 2
    return [
        arr[middle],
        arr[middle - 1]
      ]
  }
}

const sieve = max => {
  if (max > 50000000) return {median: [], primes: [], errorMessage: 'Number to Large to Compute'}
  if (max <= 2) {
    return {
      median: [],
      primes: [],
      errorMessage: 'No Prime Numbers: Select a Max Number Larger than 2'
    }
  }

  const sieve = new Array(max).fill(true)

  for (let i = 2; i < Math.sqrt(max); i++) {
    if (sieve[i]) {
      for (let j = Math.pow(i, 2); j < max; j += i) {
        sieve[j] = false
      }
    }
  }

  const primes = sieve.reduce((primes, isPrime, i) => {
    if (isPrime && i > 1) {
      primes.push(i)
    }
    return primes
  }, [])

  return {
    median: medianOf(primes),
    primes,
    errorMessage: ''
  }
}

export default sieve;
