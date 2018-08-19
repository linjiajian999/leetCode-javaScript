// https://leetcode.com/problems/count-and-say/description/
/**
 * 38. Count and Say
 * @param {number} n
 * @return {string}
 */
const arr = [,'1']
var countAndSay = function(n) {
  if (n === 1) return '1';
  if (arr[n] !== undefined) return arr[n];
  let str = countAndSay(n - 1);
  let i = 1;
  let last = str[0];
  let count = 1;
  let res = '';
  while (i < str.length) {
    if (str[i] === last) {
      count++;
    } else {
      res += count + last;
      last = str[i];
      count = 1;
    }
    i++;
  }
  res += count + last;
  return arr[n] = res;
};
