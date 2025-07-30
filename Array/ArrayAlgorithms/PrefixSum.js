/**
 * ➕ Prefix Sum Algorithm: Computes cumulative sum at each index.
 *
 * @function PreFixSum
 * @param {number[]} arr - An array of integers.
 * @returns {number[]} - A new array where each element at index `i` is the sum of elements from index `0` to `i` in the original array.
 *
 * ✅ Time Complexity: O(n)
 * ✅ Space Complexity: O(n) — for storing the prefix sum array
 *
 * 📌 Use Cases:
 * 1. 📊 Range Sum Queries: Optimize repeated sum queries (e.g., sum from i to j).
 * 2. 🧠 Interview Problems: Efficient subarray sum calculation.
 * 3. 🛍️ E-commerce: Cumulative spending over days/months.
 * 4. 🎮 Game Dev: Cumulative scores or XP progression.
 * 5. 💡 Dynamic Programming: Used as preprocessing for optimized DP solutions.
 *
 * @example
 * PreFixSum([1, 2, 3, 4, 5]); // ➝ [1, 3, 6, 10, 15]
 */

function PreFixSum(arr) {
    let prefixSum = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum;
  }
  
  // 🧪 Test
  console.log(PreFixSum([1, 2, 3, 4, 5])); // Output: [1, 3, 6, 10, 15]
  