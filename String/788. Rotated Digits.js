// https://leetcode.com/problems/rotated-digits/description/
/**
 * 788. Rotated Digits
 * @param {number} N
 * @return {number}
 */
const set1 = new Set(['2', '5', '6', '9']);
const set2 = new Set(['3', '4', '7']);
const resArr = [0, 0, 1, 1, 1, 2, 3, 3, 3, 4];
var rotatedDigits = function(N) {
  if (N < 10) return resArr[N];
  return getCount(N)
};
var getCount = function(N) {
  if (resArr[N] !== undefined) return resArr[N];
  const n = N + '';
  let set1Count = 0;
  for (let i = 0; i < n.length; i++) {
    if (set1.has(n[i])) {
      set1Count++
    } else if (set2.has(n[i])) {
      return resArr[N] = getCount(N - 1);
    }
  }
  if (set1Count > 0) {
    return resArr[n] = 1 + getCount(N - 1);
  } else {
    return resArr[n] = getCount(N - 1);
  }
};
