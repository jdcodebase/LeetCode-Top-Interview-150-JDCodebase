/*
------------------------------------------------------
LeetCode 122 - Best Time to Buy and Sell Stock II
LeetCode Top Interview 150 | JDCodebase
------------------------------------------------------

Problem:
You are given an array prices where prices[i] is the price
of a given stock on the i-th day.

You can complete as many transactions as you like:
- Buy one stock
- Sell the stock before buying again

You cannot hold multiple stocks at the same time.

Return the maximum profit you can achieve.

------------------------------------------------------
APPROACH 1: Brute Force (For Understanding)
------------------------------------------------------
Idea:
- Try all possible buy and sell combinations
- For each buy day, try all future sell days
- After selling, recursively calculate profit for remaining days
- Add current transaction profit with future profit
- Take the maximum profit

Time Complexity: Exponential (TLE)
Space Complexity: O(n) - recursion stack
Not suitable for interviews
*/

var maxProfitBruteForce = function (prices) {
  function helper(start) {
    // If we reach the end, no more profit possible
    if (start >= prices.length) return 0;

    let maxProfit = 0;

    // Choose buying day
    for (let i = start; i < prices.length; i++) {
      // Choose selling day (after buying day)
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] > prices[i]) {
          // Profit of current transaction
          // + profit from future transactions
          let profit = prices[j] - prices[i] + helper(j + 1);

          maxProfit = Math.max(maxProfit, profit);
        }
      }
    }
    return maxProfit;
  }

  return helper(0);
};

/*
------------------------------------------------------
APPROACH 2: Optimal Solution (Greedy)
------------------------------------------------------
Idea:
- Every upward price movement gives profit
- Instead of finding one best transaction,
  take all profitable transactions
- If today's price is higher than yesterday's price,
  add the difference to total profit

Key Insight:
Multiple small profits together give the
maximum possible profit.

Time Complexity: O(n)
Space Complexity: O(1)
Interview Expected Solution
*/

var maxProfit = function (prices) {
  let profit = 0;

  // Start from day 1 and compare with previous day
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};

/*
------------------------------------------------------
Example:
Input: prices = [7,1,5,3,6,4]
Output: 7

Explanation:
Buy at price = 1, Sell at price = 5  → Profit = 4
Buy at price = 3, Sell at price = 6  → Profit = 3
Total Profit = 7
------------------------------------------------------
*/
