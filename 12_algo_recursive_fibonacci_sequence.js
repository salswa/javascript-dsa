/**
 * ----------------------------------------
 * Recursive Fibonacci Sequence
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * Problem Statement:
 * ----------------------------------------
 * Given a number 'n' , find the nth element of the fibonacci sequence
 */

/**
 * ----------------------------------------
 * Definition:
 * ----------------------------------------
 * FbS is a sequence in which each number is the sum of the two preceding ones
 * The first two numbers in the sequence are 0 and 1. [0,1,1,2,3,5,8,13]
 * recurfb(0) = 0
 * recurfb(1) = 1
 * recurfb(6) = 8
 */

/**
 * ----------------------------------------
 * Solution 1:
 * ----------------------------------------
 */

/**
 * f(n) = f(n-1) + f(n-2)
 * f(0) = 0 and f(1) = 1
 * f(2) = f(1) + f(0)
 * f(2) = 1 + 0 = 1
 */

function rfb(n) {
  if (n < 2) {
    return n;
  }

  return rfb(n - 1) + rfb(n - 2);
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 1):
 * ----------------------------------------
 * Big-O : O(2^n)
 * Reasoning: The function call follows pattern 2^0 2^1 2^2 2^3 2^4 2^5 ....
 */

/**
 * ----------------------------------------
 * Function Execution:
 * ----------------------------------------
 */

let getResult = rfb;
console.log(getResult(0));
console.log(getResult(1));
console.log(getResult(2));
console.log(getResult(3));
console.log(getResult(6));
console.log(getResult(7));
console.log(getResult(8));
