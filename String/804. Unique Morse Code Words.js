// https://leetcode.com/problems/unique-morse-code-words/description/
/**
 * @param {string[]} words
 * @return {number}
 */
const m = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
var uniqueMorseRepresentations = function(words) {
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    let trans = '';
    for (let j = 0; j < words[i].length; j++) {
      trans += m[words[i][j].charCodeAt() - 97];
    }
    map.set(trans, true);
  }
  return map.size;
};