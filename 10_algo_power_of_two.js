/**
 * ----------------------------------------
 * Power of Two
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * Problem Statement:
 * ----------------------------------------
 * Give a positive integer 'n', determine if the number is a power of 2 or not
 */

/**
 * ----------------------------------------
 * Definition:
 * ----------------------------------------
 * An integer is a power of two if there exists an integer 'x'
 * such that (n === 2^x)
 * isPowerOfTwo(1) = true [2^0]
 * isPowerOfTwo(2) = true [2^1]
 * isPowerOfTwo(5) = false
 */

/**
 * ----------------------------------------
 * Solution 1:
 * ----------------------------------------
 */

function isPowerofTwo(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  let prod = 1;
  while (prod < n) {
    prod = prod * 2;
  }
  return prod === n;

  // for (let i = 1; i < n; i++) {
  //   prod = prod * 2;
  //   if (prod === n) return true;
  //   if (prod > n) return false;
  // }
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 1):
 * ----------------------------------------
 * Big-O : O(logn)
 * Reasoning: loop goes till ---> 2^k >= n  ---> k >= log2 n (base 2 log n)
 */

/**
 * ----------------------------------------
 * Solution 2:
 * ----------------------------------------
 */

/**
 * for n = 8
 * 8/2 = 4 (remainder 0)
 * 4/2 = 2 (remainder 0)
 * 2/2 = 1 (remainder 0)
 * If remainder is not 0 in any step, 'n' is not a power of two
 * If remainder is 0 and 'n' comes down to 1 eventually, 'n' is a power of two
 */

function isPowerofTwo2(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 2):
 * ----------------------------------------
 * Big-O : O(logn)
 * Reasoning: In each iteration, the value of n reduces by half
 */

/**
 * ----------------------------------------
 * Solution 3:
 * ----------------------------------------
 */

/**
 * Using Bitwise Operator
 * In binary, if n that is power of 2, then n&(n-1) = 0.
 * 1 -> 1
 * 2 -> 10
 * 3 -> 100
 * 4 -> 1000
 */

function isPowerofTwo3(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 3):
 * ----------------------------------------
 * Big-O : O(1)
 * Reasoning:
 */

/**
 * ----------------------------------------
 * Function Execution:
 * ----------------------------------------
 */

let getResult = isPowerofTwo;
//getResult = isPowerofTwo2;
//getResult = isPowerofTwo3;

console.log(getResult(0));
console.log(getResult(1));
console.log(getResult(2));
console.log(getResult(4));
console.log(getResult(5));
console.log(getResult(26));
console.log(getResult(32));
