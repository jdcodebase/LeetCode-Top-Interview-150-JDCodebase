/*
------------------------------------------------------
LeetCode 55 - Jump Game
LeetCode Top Interview 150 | JDCodebase
------------------------------------------------------

Problem:
You are given an integer array nums where nums[i]
represents the maximum jump length from index i.

You always start at index 0.

Determine whether you can reach the last index.

Return true if you can reach the last index,
otherwise return false.

------------------------------------------------------
APPROACH 1: Brute Force (For Understanding)
------------------------------------------------------
Idea:
- From each index, try all possible jumps
- For every jump, recursively check future positions
- If any path reaches the last index, return true
- Explore all possible paths using recursion
- Helps understand how decisions are made at each index

Time Complexity: Exponential (TLE)
Space Complexity: O(n) - recursion stack
Not suitable for interviews
*/

var canJumpBruteForce = function (nums) {
  function helper(index) {
    // If we reach or cross the last index, success
    if (index >= nums.length - 1) return true;

    // Try all possible jumps from current index
    for (let jump = 1; jump <= nums[index]; jump++) {
      if (helper(index + jump)) {
        return true;
      }
    }

    // If no jump leads to the end
    return false;
  }

  return helper(0);
};

/*
------------------------------------------------------
APPROACH 2: Optimal Solution (Greedy)
------------------------------------------------------
Idea:
- Track the farthest index reachable so far
- At each index, update maximum reach
- If current index goes beyond max reach, return false
- If max reach reaches or crosses last index, return true

Key Insight:
We do not need to try all paths.
We only need to know how far we can reach.

Time Complexity: O(n)
Space Complexity: O(1)
Interview Expected Solution
*/

var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // If current index is not reachable
    if (i > maxReach) return false;

    // Update the farthest reachable index
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
};

/*
------------------------------------------------------
Example:
Input: nums = [2,3,1,1,4]
Output: true

Explanation:
From index 0, jump to index 1
From index 1, jump to index 4 (last index)
------------------------------------------------------
*/
