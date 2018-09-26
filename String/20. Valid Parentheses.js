// https://leetcode.com/problems/valid-parentheses/description/
/**
 * 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
const map = {
  '(': ')',
  '{': '}',
  '[': ']',
};
var isValid = function(s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else if (s[i] === map[stack.pop()]) {
      continue
    } else {
      return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};
isValid('()[]{}');
isValid('()');
isValid('([)]');
isValid('{[]}');
isValid('');
isValid('((');
