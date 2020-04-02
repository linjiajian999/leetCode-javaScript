/**
 * 661. Image Smoother
 * https://leetcode.com/problems/image-smoother/
 * @param {number[][]} M
 * @return {number[][]}
 */

var imageSmoother = function (M) {
  const res = [];
  let count = 0;
  let sum = 0;
  for (let i = 0; i < M.length; i++) {
    res[i] = [];
    for (let j = 0; j < M[0].length; j++) {
      count = 0;
      sum = 0;
      for (let m = i - 1; m <= i + 1; m++) {
        for (let n = j - 1; n <= j + 1; n++) {
          if (m >= 0 && m < M.length && n >= 0 && n < M[0].length) {
            count++;
            sum += M[m][n];
          }
        }
      }
      res[i][j] = Math.floor(sum / count);
    }
  }
  return res;
};
