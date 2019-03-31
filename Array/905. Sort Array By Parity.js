// https://leetcode.com/problems/sort-array-by-parity/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let l = 0;
  let i = 0;
  let r = A.length - 1;
  const res = [];

  while (i < A.length) {
    if (A[i] % 2 === 0) {
      res [l] = A[i];
      l++;
    } else {
      res[r] = A[i]
      r--;
    }
    i++
  }
  return res;
};