/**
 * ----------------------------------------
 * Fibonacci Sequence
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * Problem Statement:
 * ----------------------------------------
 * Given a number 'n', find the first 'n' elements of the fibobacci sequence
 */

/**
 * ----------------------------------------
 * Definition:
 * ----------------------------------------
 * FbS is a sequence in which each number is the sum of the two preceding ones
 * The first two numbers in the sequence are 0 and 1.
 * fb(2) = [0,1]
 * fb(3) = [0,1,1]
 * fb(7) = [0,1,1,2,3,5,8]
 */

/**
 * ----------------------------------------
 * Solution 1:
 * ----------------------------------------
 */

function fibonacci(n) {
  if (n < 2) return "Not a valid input";

  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq;
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 1):
 * ----------------------------------------
 * Big-O : O(n)
 * Reasoning: contains one for loop
 */

/**
 * ----------------------------------------
 * Function Execution:
 * ----------------------------------------
 */

console.log(fibonacci(7));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
