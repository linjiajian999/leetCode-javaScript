// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} N
 * @return {number}
 */
const map = new Map();
map.set(0, 0);
map.set(1, 1);
var fib = function(N) {
  if (N < 2) {
    return N;
  }
  if (map.has(N)) {
    return map.get(N);
  }
  let i = 2;
  while (i <= N) {
    if (map.has(i)) {
      i++;
      continue;
    }
    map.set(i, map.get(i - 1) + map.get(i - 2));
    i++;
  }
  return map.get(N);
};
