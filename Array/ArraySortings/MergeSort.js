/**
 * Function: mergeSort
 * -------------------
 * Recursively sorts an array using the Merge Sort algorithm.
 * Merge Sort is a divide-and-conquer algorithm that divides the array
 * into halves, recursively sorts each half, and then merges them.
 *
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - A new sorted array.
 *
 * @example
 * mergeSort([2, 4, 56, 43, 9, 33, 92, 8])
 * // returns [2, 4, 8, 9, 33, 43, 56, 92]
 *
 * @complexity
 * Time Complexity: O(n log n)
 * - Because the array is divided log(n) times and merging takes O(n) time.
 *
 * Space Complexity: O(n)
 * - New arrays are created during each merge step.
 */

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    let mid = Math.floor(arr.length / 2);
  
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  /**
   * Merges two sorted arrays into a single sorted array.
   *
   * @param {number[]} left - Left sorted array.
   * @param {number[]} right - Right sorted array.
   * @returns {number[]} - Merged and sorted array.
   */
  function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
  
    // Add any remaining elements from both arrays
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Example usage
  let arr = [2, 4, 56, 43, 9, 33, 92, 8];
  console.log("Sorted Array:", mergeSort(arr));
  