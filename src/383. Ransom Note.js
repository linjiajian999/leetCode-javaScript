// https://leetcode.com/problems/ransom-note/description/
/**
 * 383. Ransom Note
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.indexOf(ransomNote[i]) >= 0) {
      magazine = magazine.replace(ransomNote[i], '');
    } else {
      return false;
    }
  }
  return true;
};
