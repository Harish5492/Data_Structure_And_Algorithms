/**
 * 🎯 Two Pointer Algorithm: Check if a sorted array has a pair with a given sum.
 *
 * @function hasPairWithSum
 * @param {number[]} arr - A sorted array of integers (ascending order).
 * @param {number} target - Target sum to find from two elements.
 * @returns {boolean} - Returns true if a pair exists with the given sum, else false.
 *
 * ✅ Time Complexity:
 * - O(n) — Linear traversal with two pointers
 *
 * ✅ Space Complexity:
 * - O(1) — No extra space used
 *
 * 📌 Use Cases:
 * 1. 🔐 Security Systems: Find if two event logs add up to a suspicious value.
 * 2. 🎟️ Ticket Pricing: Check if any two ticket prices match a user’s gift card amount.
 * 3. 🎬 Movie Scheduling: Choose two movies to exactly fill the remaining time on a flight.
 * 4. 💳 Bank Fraud Detection: Validate if two transactions sum to a flagged suspicious amount.
 * 5. 📈 Investment Portfolio: Find two investments that sum to a target return.
 * 6. 🔍 Interview Prep: Classic two-pointer pattern asked in coding interviews.
 *
 * ⚠️ Note:
 * - Array must be sorted for this technique to work correctly.
 * - If not sorted, use `arr.sort((a, b) => a - b)` before calling the function.
 *
 * @example
 * hasPairWithSum([1, 2, 3, 4, 5, 6], 11); // true (5 + 6)
 * hasPairWithSum([1, 2, 4, 7, 11], 10); // true (3 + 7)
 * hasPairWithSum([1, 2, 3], 7); // false
 */

function hasPairWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return true;
        }
        sum < target ? left++ : right--;
    }
    return false;
}

// 🧪 Test Case
console.log(hasPairWithSum([1, 2, 3, 4, 5, 6], 11)); // Output: true (5 + 6)
