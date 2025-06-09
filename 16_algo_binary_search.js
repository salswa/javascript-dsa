/**
 * ----------------------------------------
 * Binary Search
 * ----------------------------------------
 */

/**
 * ----------------------------------------
 * Problem Statement:
 * ----------------------------------------
 * Given a sorted array of 'n' elements and a target element 't',
 * find the index of 't' in the array. Return -1 if element not found.
 *
 * Examples:
 * arr=[-5,2,4,6,10] t=10 ---> 4
 * arr=[-5,2,4,6,10] t=6  ---> 3
 * arr=[-5,2,4,6,10] t=20 ---> -1
 */

/**
 * ----------------------------------------
 * Definition:
 * ----------------------------------------
 * If the array is empty, return -1 as the element cannot be found.
 * If the array has elements, find the middle element in the array.
 */

/**
 * ----------------------------------------
 * Solution 1:
 * ----------------------------------------
 */
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    }
  }
  return -1;
}

/**
 * ----------------------------------------
 * Time Complexity (Solution 1):
 * ----------------------------------------
 * Big-O : O(logn)
 * Reasoning:
 */

/**
 * ----------------------------------------
 * Function Execution:
 * ----------------------------------------
 */

getResult = binarySearch;

let arr = [-5, 2, 4, 6, 10];

console.log(getResult(arr, 10));
console.log(getResult(arr, 6));
console.log(getResult(arr, 20));
console.log(getResult(arr, 2));
console.log(getResult(arr, -5));
