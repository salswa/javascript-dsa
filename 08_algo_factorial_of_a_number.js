/**
 * ----------------------------------------
 * Factorial of a Number
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * Problem Statement:
 * ----------------------------------------
 * Given an integer 'n', find the factorial of that integer
 */

/**
 * ----------------------------------------
 * Definition:
 * ----------------------------------------
 * The factorial of a non-negative integer 'n', denoted n! , is the product of all positive integers less than or equal to 'n'.
 * fact(0) = 0! = 1
 * fact(4) = 4! = 4x3x2x1 = 24
 * fact(5) = 5! = 5x4x3x2x1 = 120
 */

/**
 * ----------------------------------------
 * Solution 1:
 * ----------------------------------------
 */

function factorial(n) {
  if (n < 0) return "Not a valid input";

  let fact = 1;
  for (let i = n; i > 1; i--) {
    fact = fact * i;
  }
  return fact;
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
 * Function Execution:
 * ----------------------------------------
 */

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(-3));
console.log(factorial(9));
