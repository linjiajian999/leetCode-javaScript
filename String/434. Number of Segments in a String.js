// https://leetcode.com/problems/number-of-segments-in-a-string/description/
/**
 * 434. Number of Segments in a String
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  s = s.trim();
  if (s.length < 1) return 0;
  return s.split(/\s+/g).length;
};
