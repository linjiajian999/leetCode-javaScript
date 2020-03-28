//https://leetcode.com/problems/length-of-last-word/description/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  const index = s.lastIndexOf(' ');
  if (index < 0) return s.length;
  return s.length - index - 1;
};
var lengthOfLastWord = function(s) {
  const arr = s.match(/(\w+)\s*$/);
  return arr ? arr.pop().length : 0;
};