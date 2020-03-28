// https://leetcode.com/problems/first-unique-character-in-a-string/description/
/**
 * 387. First Unique Character in a String
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === undefined) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  for (let item of map) {
    if (item[1] === 1) {
      return s.indexOf(item[0]);
    }
  }
  return -1;
};
var firstUniqChar = function(s) {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i]) && s.lastIndexOf(s[i]) === i) {
      return i;
    } else {
      set.add(s[i]);
    }
  }
  return -1;
};