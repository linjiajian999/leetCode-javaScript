/**
 * https://leetcode.com/problems/range-sum-query-immutable/description/
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sumList = [];
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    this.sumList[i] = sum += nums[i];
  }
  console.log(this.sumList);
};

/**
* @param {number} i
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
  if (i < 1) {
    return this.sumList[j]
  } else {
    return this.sumList[j] - this.sumList[i-1];
  }
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = Object.create(NumArray).createNew(nums)
* var param_1 = obj.sumRange(i,j)
*/