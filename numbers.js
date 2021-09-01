/****Primality Test****/

//version 1
//Time Complexity: O(n)

// function isPrime(n) {
//   if (n <= 1) {
//     return false
//   }

//   for (var i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false
//     }
//   }
//   return true
// }

//version 2 (improved)
//Time Complexity: O(sqrt(n))

function isPrime(n) {
  if (n <= 1) return false
  if (n <= 3) return false

  //this is checked so that we can skip
  // middle five numbers in below loop
  if (n % 2 == 0 || n % 3 == 0) return false

  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false
  }
  return true
}

/**** PRIME FACTORIZATION ****/
/*
   is the process of determining which prime numbers multiply to a given number.
   given 10 , it would print 5 and 2
*/

function primeFactors(n) {
  //print the number of 2s that devide n
  while (n % 2 == 0) {
    console.log(2)

    n = n / 2
  }

  //n must be odd at this point , so we skip one element (Note i = i +2)

  for (var i = 3; i * i < n; i = i + 2) {
    //while i deveides n , print i and deveide n
    while (n % i == 0) {
      console.log(i)
      n = n / i
    }
  }

  //this condition is to handle the case when n is a prime number greater than 2

  if (n > 2) {
    console.log(n)
  }
}

/** EXERCISES **/

/* 1. Given three numbers x, y, and p, compute (xˆy) % p. (This ismodular exponentiation.) */

function modularExponentiation(base, exponent, modulus) {
  if (modulus == 1) return 0

  var value = 1

  for (var i = 0; i < exponent; i++) {
    value = (value * base) % modulus
  }
  return value
}

//Time Complexity: O(n)

/*2. Print all primes less than n. */

function allPrimesLessThanN(n) {
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i)
    }
  }
}

//Time Complexity: O(nsqrt(n))

/*3. Check for a set of prime factors. */

function maxDivide(number, divisor) {
  while (number % divisor == 0) {
    number /= divisor
  }
  return number
}

function isUgly(number) {
  number = maxDivide(number, 2)
  number = maxDivide(number, 3)
  number = maxDivide(number, 5)

  return number === 1
}

function arrayNUglyNumbers(n) {
  var counter = 0,
    currentNumber = 1,
    uglyNumbers = []

  while (counter != n) {
    if (isUgly(currentNumber)) {
      counter++
      uglyNumbers.push(currentNumber)
    }
    currentNumber++
  }
  return uglyNumbers
}

/*
   Time Complexity for maxDivide(number, divisor):
   O(logdivisor(number))

   Time Complexity for isUgly: O(log2(n))
   Time Complexity for arrayNUglyNumbers: O(n(log2(n)))
*/
