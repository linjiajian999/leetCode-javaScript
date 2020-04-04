/**
 * 665. Non-decreasing Array
 * https://leetcode.com/problems/non-decreasing-array/
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  if (nums.length < 3) {
    return true;
  }
  let count = 0;
  if (nums[0] > nums[1]) {
    nums[0] = nums[1];
    count++;
  }
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
      if (count > 1) {
        return false;
      }
      if (nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }
  return true;
};