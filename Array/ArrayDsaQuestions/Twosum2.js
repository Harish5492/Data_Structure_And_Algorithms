function TwoSum2(nums, target) {
  let result = [];
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      result.push(left + 1, right + 1);
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}
console.log(TwoSum2([2, 7, 11, 15], 9)); // Output: [1, 2]
