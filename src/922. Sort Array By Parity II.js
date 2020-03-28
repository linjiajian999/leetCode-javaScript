// https://leetcode.com/problems/sort-array-by-parity-ii/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let j = 1;
  let temp;
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 === 1) {
      while (A[j] %2 === 1) {
        j += 2;
      }
      temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
  }
  return A;
};
