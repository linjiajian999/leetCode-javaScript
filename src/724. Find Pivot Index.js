/**
 * 724. Find Pivot Index
 * https://leetcode-cn.com/problems/find-pivot-index/
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length < 3) {
    return -1;
  }
  const s = [];
  s[0] = 0;

  for (let i = 1; i <= nums.length; i++) {
    s[i] = s[i - 1] + nums[i - 1];
  }
  for (let i = 0; i < nums.length; i++) {
    if (s[i] === s[s.length - 1] - s[i] - nums[i]) {
      return i
    }
  }
  return -1;
};
