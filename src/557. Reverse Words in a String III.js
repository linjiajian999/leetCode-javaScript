// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.split(' ');
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      res += arr[i][j];
    }
    res += ' ';
  }
  return res.trim();
};
