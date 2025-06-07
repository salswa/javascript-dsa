/**
 * ----------------------------------------
 * Big-O Notation
 * ----------------------------------------
 * Worst case complexity
 * Describes complexity in terms of algebraic terms
 * Expressed in terms of the input
 * It focues on bigger picture w/o being caught up in the minute details
 */

/**
 * ----------------------------------------
 * Time Complexity
 * ----------------------------------------
 */

function summation(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * above function @summation has three main statements to execute:
 * line1:let sum = 0
 * line2: sum +=i;
 * line3: return sum
 * For n=4, let's calculate the number of times each statement executes:
 * line1: 1
 * line2: 4
 * line3: 1
 * Total count (T) = 4 + 2 = (n + 2) [ if n=100, T= 100+2 = 102 ]
 * As n increases, +2 in (n+2) becomes insignificant
 * So, the T can be approximated to just n (T = n)
 *
 * Time Complexity (TC) : O(n) - Linear
 * [ As size of input increases, TC also increases]
 * one for loop usually has linear TC
 */

function summation2(n) {
  return (n * (n + 1)) / 2;
}

/**
 * @summation2 has TC: O(1) - Constant
 * return statement executed only once for any value of n
 */

/**
 * Two nested loops has quadratic TC
 * O(n^2) - Quadratic
 * 3n^2 + 5n + 1 will be approximated to 3n^2
 */

/**
 * Three nested loops, then TC:
 * O(n^3) - Cubic
 */

/**
 * If input size reduces by half every iteration, then TC:
 * O(logn) - Logarithmic
 */

/**
 * ----------------------------------------
 * Space Complexity
 * ----------------------------------------
 * O(1) : Constant [Does not need extra memory and memory needed does not depend upon input size for eg. Sorting array]
 * O(n) :  Linear [ Space needed grows as input size increases]
 * O(logn) : Logarithmic [ Space needed grows but not at the same rate as input size]
 */

/**
 * ----------------------------------------
 * Efficency trend as input size increases
 * ----------------------------------------
 * O(1) > O(logn) > O(n) > O(nlogn) > O(n^2) > O(2^n) > O(n!)
 */
