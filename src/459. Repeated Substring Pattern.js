// https://leetcode.com/problems/repeated-substring-pattern/description/
/**
 * 459. Repeated Substring Pattern
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let str = s + s;
  str = str.substring(1, str.length - 1);
  return str.indexOf(s) > -1;
};