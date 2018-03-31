/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const map = new Map();
  let res = 0;
  let maxLength = 0;
  for (let num of nums) {
    if (!map.has(num)) {
      const left = map.has(num - 1) ? map.get(num - 1) : 0;
      const right = map.has(num + 1) ? map.get(num + 1) : 0;
      const sum = left + right + 1;
      map.set(num, sum);
      maxLength = Math.max(maxLength, sum);
      map.set(num - left, sum);
      map.set(num + right, sum);
      console.log(map);
    }
  }
  return maxLength;
};