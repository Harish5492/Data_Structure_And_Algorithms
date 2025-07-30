/* LeetCode Question No. 1 */
/* 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

let nums = [2, 7, 11, 15];
let target = 9;
/* Approach No. 1 */

/**
 * Brute-force approach to find two indices whose values add up to the target.
 * It checks every pair using two nested loops.
 * Time Complexity: O(n²) – because we check all possible pairs.
 * Space Complexity: O(1) – no extra space used except variables.
 */
function TwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(TwoSum(nums, target));

/* Approach No. 2 */
/* ------Best Approach------ */
/* 
This function returns the indices of the two numbers that add up to the target.
It checks if the complement (target - current number) exists in the map.
If yes, it returns the stored index and the current one.
Time: O(n) – we loop through the array once
Space: O(n) – we store each number in a map 
*/
function TwoSum2(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

console.log(TwoSum2(nums, target));

/**
 * ----Not Proper ans but significiant to the problem statement.-----
 * Approach No. 3 – Two Pointer Technique
 * --------------------------------------
 * This approach works only when the array is sorted.
 * If not, we sort the array first, then use two pointers from both ends
 * to find two numbers that add up to the target.
 * 
 * ❌ Disadvantage: It does NOT return the original indices (only works with values).
 * ❌ Not suitable for unsorted arrays if indices are required, unless extra tracking is done.
 *
 * Time Complexity:
 *   - Sorting: O(n log n)
 *   - Two pointer scan: O(n)
 *   → Overall: O(n log n)
 *
 * Space Complexity: 
 *   - O(1) if sorting in-place (like JS’s `.sort()`), otherwise O(n) for copy
 *
 * Note: We are modifying the original array due to `.sort()`.
 */

function TwoSum3(nums, target) {
    nums.sort((a, b) => a - b); // Sort in ascending order
  
    let left = 0;
    let right = nums.length - 1; // Fixed: was mistakenly written as arr.length
  
    while (left < right) {
      let sum = nums[left] + nums[right]; 
      if (sum === target) {
        return [nums[left], nums[right]]; // Returns the values, not indices
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null; // No pair found
  }
  

console.log(TwoSum3(nums, target));
