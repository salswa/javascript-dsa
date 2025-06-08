/**
 * ----------------------------------------
 * Linear Search
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * Problem Statement:
 * ----------------------------------------
 * Given an array of 'n' elements and a target element 't' ,
 * find the index of 't' in the array.
 * Return -1 if the target element is not found.
 *
 * Examples:
 * arr = [-5,2,10,4,6] t=10 ---> 2
 * arr = [-5,2,10,4,6] t=6  ---> 4
 * arr = [-5,2,10,4,6] t=20 ---> -1
 */

/**
 * ----------------------------------------
 * Definition:
 * ----------------------------------------
 * Start at the first element in the array and move towards the last.
 * At each element, check if its equal to target element.
 * If element found, return the index of the element.
 * If element not found, return -1.
 */

/**
 * ----------------------------------------
 * Solution 1:
 * ----------------------------------------
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 1):
 * ----------------------------------------
 * Big-O : O(n) n: array length
 * Reasoning: as n increases, no of times if executes increases
 */

/**
 * ----------------------------------------
 * Function Execution:
 * ----------------------------------------
 */

getResult = linearSearch;

let arr = [-5, 2, 10, 4, 6];

console.log(getResult(arr, 10));
console.log(getResult(arr, 6));
console.log(getResult(arr, 20));
