/**
 * 566. Reshape the Matrix
 * https://leetcode.com/problems/reshape-the-matrix/
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (r * c !== nums.length * nums[0].length) {
    return nums;
  }
  let res = Array(r);
  let index = 0;
  for (let i = 0; i < r; i++) {
    res[i] = Array(c).fill(0);
    for (let j = 0; j < c; j++) {
      index = i * c + j;
      res[i][j] = nums[Math.trunc(index / nums[0].length)][index % nums[0].length]
    }
  }
  return res;
};
