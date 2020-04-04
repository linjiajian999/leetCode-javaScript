/**
 * 830. Positions of Large Groups
 * https://leetcode.com/problems/positions-of-large-groups/
 * @param {string} S
 * @return {number[][]}
*/
var largeGroupPositions = function (s) {
  if (s.length < 3) {
    return [];
  }
  let start = 0;
  let end = 0;
  let res = [];
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
      end = i
    } else {
      if (count >= 3) {
        res.push([start, end]);
      }
      count = 1;
      start = i;
    }
  }
  return res;
};

const test1 = (s) => {
  const res = largeGroupPositions(s);
  console.log('res', res)
}


test1("abbxxxxzzy");
test1("abbxxxxzzy");