// https://leetcode.com/problems/reverse-vowels-of-a-string/description/
/**
 * 345. Reverse Vowels of a String
 * @param {string} s
 * @return {string}
 */
const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
var reverseVowels = function(s) {
  let left = 0;
  let right = s.length - 1;
  const arr = s.split('');
  let tem = ''
  while (left < right) {
    if (set.has(arr[left])) {
      if (set.has(arr[right])) {
        tem = arr[right];
        arr[right] = arr[left];
        arr[left] = tem;
        left++;
        right--;
      } else {
        right--
      }
    } else if (set.has(arr[right])) {
      left++;
    } else {
      left++;
      right--;
    }
  }
  return arr.join('');
};