/**
 * 747. Largest Number At Least Twice of Others
 * https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max1 = 0;
  let max2 = 0;
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
      maxIndex = i;
    } else if (nums[i] > max2) {
      max2 = nums[i];
    }
  }
  return max1 >= max2 * 2 ? maxIndex : -1;
};
