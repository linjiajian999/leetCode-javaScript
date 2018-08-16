// https://leetcode.com/problems/reverse-string-ii/description/
/**
 * 541. Reverse String II
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let res = '';
  for(let i = 0; i < s.length; i += 2 * k) {
    res += s.substring(i, i + k).split('').reverse().join('') + s.substring(i + k, i + 2 * k);
  }
  return res;
};
