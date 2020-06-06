/**
 * https://leetcode.com/problems/monotonic-array/
 * 896. Monotonic Array
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A.length < 3) {
    return true;
  }
  let delta = 0;
  let type = 0;
  for (let i = 1; i < A.length; i++) {
    delta = A[i] - A[i - 1];
    if (delta === 0) {
      continue;
    }
    if (type === 0) {
      type = delta;
    }
    if (delta > 0 && type >= 0) {
      continue;
    }
    if (delta < 0 && type <= 0) {
      continue;
    }
    return false;
  }
  return true;
};
