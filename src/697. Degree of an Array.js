/**
 * 697. Degree of an Array
 * https://leetcode.com/problems/degree-of-an-array/
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = Object.create(null);
  let maxCount = 1;

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = {
        count: 1,
        start: i,
        end: i
      }
    } else {
      map[nums[i]].count++;
      map[nums[i]].end = i;
      maxCount = Math.max(maxCount, map[nums[i]].count);
    }
  }
  let minD = 0;
  for (let key in map) {
    if (map[key].count === maxCount) {
      minD = minD ? Math.min(map[key].end - map[key].start, minD) : map[key].end - map[key].start;
    }
  }
  return minD + 1;
};
