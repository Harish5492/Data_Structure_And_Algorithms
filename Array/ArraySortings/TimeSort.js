/**
 * timeSort function sorts an array of numbers based on their values.
 * It uses setTimeout to delay the execution of pushing each element into the returningArr array.
 *
 * @param {number[]} arr - The input array of numbers to be sorted.
 * @returns {Promise<number[]>} - A Promise that resolves to the sorted array.
 *
 * @example
 * timeSort([4, 2, 5, 10, 2]); // returns [2, 2, 4, 5, 10]
 *
 * @complexity
 * Time Complexity: O(n log n) for sorting step
 * Space Complexity: O(n)
 */
function timeSort(arr) {
  const returningArr = [];

  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      returningArr.push(arr[i]);
    }, arr[i]);
  }

  const maxDelay = Math.max(...arr);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(returningArr.sort((a, b) => a - b));
    }, maxDelay + 10); // small buffer to ensure all setTimeouts finish
  });
}

const arr = [4, 2, 5, 10, 2];
timeSort(arr).then((sortedArr) => console.log(sortedArr));
