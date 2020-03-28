// https://leetcode.com/problems/most-common-word/description/
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph
    .toLowerCase()
    .replace(/(!|\?|'|,|;|\.)/g, ' ');
  const arr = paragraph.split(' ');
  const map = new Map();
  const banSet = new Set(banned);
  for (let i = 0; i < arr.length; i++) {
    if (banSet.has(arr[i])) continue;
    if (arr[i].length < 1) continue;
    map.set(arr[i], (map.get(arr[i]) || 0) +1);
  }
  let max = 0;
  let maxStr = '';
  map.forEach((value, key) => {
    if (value > max) {
      maxStr = key;
      max = value;
    }
  });
  return maxStr;
};
