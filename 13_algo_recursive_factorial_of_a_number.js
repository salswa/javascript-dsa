/**
 * ----------------------------------------
 * Recursive factorial of a number
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * Problem Statement:
 * ----------------------------------------
 * Given a integer 'n' , find the factorial of that integer
 */

/**
 * ----------------------------------------
 * Definition:
 * ----------------------------------------
 * The factorial of a non-negative integer 'n', denoted n! ,
 * is the product of all positive integers less than or equal to 'n'.
 * fact(0) = 0! = 1
 * fact(4) = 4! = 4x3x2x1 = 24
 * fact(5) = 5! = 5x4x3x2x1 = 120
 */

/**
 * ----------------------------------------
 * Solution 1:
 * ----------------------------------------
 */

/**
 * 4! = 4x3x2x1 = 4x3!
 * 3! = 3x2x1   = 3x2!
 * 2! = 2x1     = 2x1!
 * 1! = 1x1     = 1x0!
 * 0! = 1
 * n! = n x (n-1)!
 * f(n) = n x f(n-1)
 * base case : f(0) = 1
 */

function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 1):
 * ----------------------------------------
 * Big-O : O(n)
 * Reasoning: recursive function call occurs n times
 */

/**
 * ----------------------------------------
 * Function Execution:
 * ----------------------------------------
 */

let getResult = fact;

console.log(getResult(0));
console.log(getResult(1));
console.log(getResult(2));
console.log(getResult(5));
console.log(getResult(6));
console.log(getResult(9));
