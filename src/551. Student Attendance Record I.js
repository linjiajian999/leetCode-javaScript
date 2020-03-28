// https://leetcode.com/problems/student-attendance-record-i/description/
/**
 * 551. Student Attendance Record I
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  s = s.replace('A', 'B');
  if (s.indexOf('A') > -1) return false;
  let last2 = s[0];
  let last1 = s[1];
  for (let i = 2; i < s.length; i++) {
    if (s[i] === 'L' && last1 === 'L' && last2 === 'L') {
      return false;
    }
    last2 = last1;
    last1 = s[i];
  }
  return true;
};
var checkRecord = function(s) {
  if (s.indexOf('LLL') > -1) return false;
  s = s.replace('A', '');
  if (s.indexOf('A') > -1) return false;
  return true;
};