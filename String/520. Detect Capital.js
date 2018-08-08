// https://leetcode.com/problems/detect-capital/description/
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length <= 1) return true;
  const wordSet = new Set();
  const wordLower = word.toLowerCase()
  wordSet.add(wordLower);
  wordSet.add(word.toUpperCase());
  wordSet.add(wordLower[0].toUpperCase() + wordLower.substring(1));
  return wordSet.has(word);
};
var detectCapitalUse = function(word) {
  if (word.length < 2) return true;
  const len = word.length;
  let count = 0;
  for (let i = 1; i < len; i++) {
    if (word[i].charCodeAt() >= 97) {
      count++;
    } else {
      count += 2;
    }
  }
  if (
    count + 1 === len
    || (word[0].charCodeAt() < 97 && len * 2 === count + 2)
  ) {
    return true;
  } else {
    return false
  }
};
