/*
------------------------------------------------------
LeetCode 121 - Best Time to Buy and Sell Stock
LeetCode Top Interview 150 | JDCodebase
------------------------------------------------------

Problem:
You are given an array prices where prices[i] is the price
of a given stock on the i-th day.

You want to maximize your profit by choosing:
- One day to buy
- One different day in the future to sell

Return the maximum profit you can achieve.
If no profit is possible, return 0.

------------------------------------------------------
APPROACH 1: Brute Force (For Understanding)
------------------------------------------------------
Idea:
- Try every possible buy day
- For each buy day, try all future sell days
- Calculate profit for each pair
- Keep track of the maximum profit

Time Complexity: O(n^2)
Space Complexity: O(1)
Not suitable for large inputs (TLE)
*/

var maxProfitBruteForce = function (prices) {
  let maxProfit = 0;

  // Choose buying day
  for (let i = 0; i < prices.length; i++) {
    // Choose selling day (after buying day)
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
};

/*
------------------------------------------------------
APPROACH 2: Optimal Solution (Greedy / One Pass)
------------------------------------------------------
Idea:
- Track the minimum price seen so far
- For each day, assume selling on that day
- Calculate profit using the minimum price
- Update maximum profit

Key Insight:
Buy at the lowest price before the current day,
sell at the current price.

Time Complexity: O(n)
Space Complexity: O(1)
Interview Expected Solution
*/

var maxProfit = function (prices) {
  let minPrice = Infinity; // Lowest price so far
  let maxProfit = 0; // Maximum profit so far

  for (let price of prices) {
    // Update minimum price (best day to buy)
    minPrice = Math.min(minPrice, price);

    // Calculate profit if sold today
    let profit = price - minPrice;

    // Update maximum profit
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
};

/*
------------------------------------------------------
Example:
Input: prices = [7,1,5,3,6,4]
Output: 5

Explanation:
Buy at price = 1
Sell at price = 6
Profit = 6 - 1 = 5
------------------------------------------------------
*/
