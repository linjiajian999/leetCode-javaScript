/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares1 = function(A) {
  return A.map(a => a * a).sort((a, b) => a - b);
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares2 = function(A) {
  if (A[0] > -1) {
    for (let i = 0; i < A.length; i++) {
      A[i] = A[i] * A[i];
    }
    return A;
  }
  const res = [];
  let left = 0;
  let right = A.length - 1;
  let i = right;
  while (i > -1) {
    if (A[left] < 0 && Math.abs(A[left]) > A[right]) {
      res[i] = A[left] * A[left];
      left++;
      i--;
      continue;
    }
    res[i] = A[right] * A[right];
    right--;
    i--;
  }
  return res;
};
