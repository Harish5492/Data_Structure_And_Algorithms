/**
 * 🚪 Sliding Window Algorithm: Find the maximum sum of any subarray of size k.
 *
 * @function SlidingWindow
 * @param {number[]} arr - Array of positive integers.
 * @param {number} k - Size of the sliding window (number of consecutive elements).
 * @returns {number} - The maximum sum of any subarray of length k.
 *
 * ✅ Time Complexity:
 * - O(n) — Efficient linear scan of the array
 *
 * ✅ Space Complexity:
 * - O(1) — No additional space used
 *
 * 📌 Use Cases:
 * 1. 📊 Data Analysis: Find the highest sales/revenue in any k-day period.
 * 2. 🧠 Cognitive Tests: Track highest performance in a time-limited interval.
 * 3. 🧮 Subarray Problems: Common technique in coding interviews.
 * 4. 📺 Streaming Buffer: Calculate max view time within fixed-duration windows.
 * 5. 🎮 Game Development: Track max score or action in a moving frame.
 * 6. 🌡️ IoT Sensors: Monitor highest temperature in past k readings.
 *
 * @example
 * SlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // ➝ 24 (7+8+9)
 * SlidingWindow([1, 2, 5, 9, 5, 6, 7, 8, 9], 3); // ➝ 24 (7+8+9)
 */

function SlidingWindow(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
  
    // First window
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
  
    maxSum = windowSum;
  
    // Slide the window through the array
    for (let i = k; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - k]; // Add new element, remove oldest one
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  
  // 🧪 Test
  console.log(SlidingWindow([1, 2, 5, 9, 5, 6, 7, 8, 9], 3)); // Output: 24 (7+8+9)
  