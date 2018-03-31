/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort(function(a, b) {
    return a - b;
  });
  const res = [[]];
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    start = i >= 1 && nums[i] === nums[i - 1] ? end : 0;
    end = res.length;
    for (let j = start; j < end; j++) {
      let tem = Array.from(res[j]);
      tem.push(nums[i]);
      res.push(tem);
    }
  }
  return res;
};
