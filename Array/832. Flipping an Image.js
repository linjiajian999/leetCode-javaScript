// https://leetcode.com/problems/flipping-an-image/description/
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    A[i].reverse();
    for (let j = 0; j < A[i].length; j++) {
      A[i][j] = A[i][j] ^ 1;
    }
  }
  return A;
};
var flipAndInvertImage = function(A) {
  return A.map(vals => vals.reverse().map(val => val ^ 1));
};