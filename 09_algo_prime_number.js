/**
 * ----------------------------------------
 * Prime Number
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * Problem Statement:
 * ----------------------------------------
 * Given a natural number 'n',determine if the number is prime or not
 */

/**
 * ----------------------------------------
 * Definition:
 * ----------------------------------------
 * A prime number is a natural number greater than 1 that has exactly two distinct factors: 1 and itself
 * isPrime(5) = true [1x5 or 5x1]
 * isPrime(4) = false [1x4 or 2x2 or 4x1]
 */

/**
 * ----------------------------------------
 * Solution 1:
 * ----------------------------------------
 */

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 1):
 * ----------------------------------------
 * Big-O : O(n)
 * Reasoning: one for loop
 */

/**
 * ----------------------------------------
 * Solution 2:
 * ----------------------------------------
 */

/**
 * Optimized Primality Test
 *
 * Integers larger than the square root do not need to be checked
 * because,whenever 'n=axb' , one of the two factors 'a' and 'b'
 * is less than or equal to the square root of 'n'
 * For ex: n=24, a=4 and b=6
 * sqrt(24) = 4.89 [a < 4.89]
 * n=35, a=5 and b=7
 * sqrt(35) = 5.91 [a < 5.91]
 */

function isPrime2(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 2):
 * ----------------------------------------
 * Big-O : O(sqrt(n))
 * Reasoning: input size is reduced
 */

/**
 * ----------------------------------------
 * Function Execution:
 * ----------------------------------------
 */

let getResultIsPrime = isPrime;
//getResultIsPrime = isPrime2;

console.log(getResultIsPrime(0)); //false
console.log(getResultIsPrime(1)); //false
console.log(getResultIsPrime(2)); //true
console.log(getResultIsPrime(3)); //true
console.log(getResultIsPrime(4)); //false
console.log(getResultIsPrime(189)); //false
console.log(getResultIsPrime(-1)); //false
console.log(getResultIsPrime(31)); //true
