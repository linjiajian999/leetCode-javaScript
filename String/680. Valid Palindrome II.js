// https://leetcode.com/problems/valid-palindrome-ii/description/
/**
 * 680. Valid Palindrome II
 * @param {string} s
 * @return {boolean}
 */
var isEqual = function(s, left, right) {
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
var validPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] != s[right]) {
      return isEqual(s, left + 1, right) || isEqual(s, left, right - 1);
    } else {
      left++;
      right--;
    }
  }
  return true;
};
console.log(validPalindrome('abca'));