/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let get = cost[0];
  let over = cost[1];
  let tem = 0;
  for (let i = 2; i < cost.length; i++) {
    tem = over;
    over = Math.min(over, get) + cost[i];
    get = tem;
  }
  return Math.min(over, get);
};
