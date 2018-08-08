// https://leetcode.com/problems/unique-morse-code-words/description/
/**
 * @param {string[]} words
 * @return {number}
 */
const m = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const lettersMap = new Map();
letters.forEach((value, index) => { lettersMap.set(value, m[index]) })
var uniqueMorseRepresentations = function(words) {
  const set = new Set();
  for (let i = 0; i < words.length; i++) {
    let trans = '';
    for (let j = 0; j < words[i].length; j++) {
      trans += lettersMap.get(words[i][j]);
    }
    set.add(trans)
  }
  return set.size;
};
var uniqueMorseRepresentations = function(words) {
  const set = new Set();
  for (let i = 0; i < words.length; i++) {
    let trans = '';
    for (let j = 0; j < words[i].length; j++) {
      trans += m[words[i][j].charCodeAt() - 97];
    }
    set.add(trans);
  }
  return set.size;
};