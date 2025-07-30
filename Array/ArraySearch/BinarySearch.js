/**
 * Performs binary search on a sorted array to find the index of a target element.
 *
 * @param {number[]} arr - A sorted array of numbers.
 * @param {number} target - The number to search for.
 * @returns {number} The index of the target in the array, or -1 if not found.
 *
 * @example
 * binarySearch([1, 3, 5, 6, 8, 10], 6); // Returns 3
 * binarySearch([1, 3, 5, 6, 8, 10], 7); // Returns -1
 *  Time Complexity: O(log n)
 *  Space Complexity: O(1)
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const result = binarySearch([1, 3, 5, 6, 8, 10], 10);
console.log(result);
