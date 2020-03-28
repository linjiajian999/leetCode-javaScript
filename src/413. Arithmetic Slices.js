/**
 * https://leetcode.com/problems/arithmetic-slices/description/
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let res = 0;
  let count = 0;
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i- 1] - A[i - 2]) {
      count++;
    } else {
      res += (count + 1) * count / 2;
      count = 0;
    }
  }
  return res += (count + 1) * count / 2;
};
var numberOfArithmeticSlices = function(A) {
  let res = 0;
  let count = 0;
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i- 1] - A[i - 2]) {
      res += ++count;
    } else {
      count = 0;
    }
  }
  return res;
};