// https://leetcode.com/problems/transpose-matrix/description/
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const arr = [];
  for (let i = 0, len = A[0].length; i < len; i++) {
    arr[i] = [];
    for (let j = 0; j < A.length; j++) {
     arr[i].push(A[j][i]);
    }
  }
  return arr;
};
var transpose = function(A) {
  return A[0].map((_, index) => A.map(vals => vals[index]));
};
