/**
 *https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let profit = 0;
  let money = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, money + prices[i] - fee);
    money = Math.max(money, profit - prices[i]);
  }
  return profit;
};
