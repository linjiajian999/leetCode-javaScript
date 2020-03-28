// https://leetcode.com/problems/goat-latin/description/
/**
 * @param {string} s
 * @return {string}
 */
const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
var toGoatLatin = function(s) {
  const arr = s.split(' ');
  let append = 'a';
  const ma = 'ma';
  for (let i = 0; i < arr.length; i++) {
    if (vowelSet.has(arr[i][0])) {
      arr[i] += ma;
    } else {
      arr[i] = arr[i].substring(1) + arr[i][0] + ma;
    }
    arr[i] += append;
    append += 'a';
  }
  return arr.join(' ');
};
