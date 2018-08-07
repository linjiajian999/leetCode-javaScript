// https://leetcode.com/problems/reverse-string/description/
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  return s.split('').reverse().join('');
};
var reverseString = function(s) {
  let str = '';
  for (var i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }
  return str;
};