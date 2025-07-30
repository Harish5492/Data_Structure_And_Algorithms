/**
 * ⚡ Kadane's Algorithm: Finds the maximum sum of a contiguous subarray.
 *
 * @function maxSubArraySumByKadane
 * @param {number[]} arr - Array of integers (can include negative numbers).
 * @returns {number} - The maximum subarray sum.
 *
 * ✅ Time Complexity: O(n) — Linear scan of the array.
 * ✅ Space Complexity: O(1) — Constant space used.
 *
 * 📌 Use Cases:
 * 1. 📊 Financial Analysis: Max profit over a continuous period.
 * 2. 📈 Stock Trading: Max gain over consecutive days.
 * 3. 🧠 Competitive Programming: One of the most asked subarray problems.
 * 4. 🧮 Array Processing: Find optimal performance windows in streaming data.
 * 5. 🎮 Game Dev: Max score or streak calculation in dynamic arrays.
 *
 * 💡 Logic:
 * - At every step, choose the **maximum between the current element and (current sum + element)**.
 * - Reset `currentSum` if it becomes less than the current element.
 * - Keep track of the global `maxSum`.
 *
 * @example
 * maxSubArraySumByKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // ➝ 6 (subarray: [4, -1, 2, 1])
 */

function maxSubArraySumByKadane(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]); // restart or continue
      maxSum = Math.max(maxSum, currentSum); // update max
    }
  
    return maxSum;
  }
  
  // 🧪 Test
  console.log(maxSubArraySumByKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
  