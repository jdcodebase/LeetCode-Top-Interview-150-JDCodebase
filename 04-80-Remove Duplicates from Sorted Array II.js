/*
LeetCode 80 – Remove Duplicates from Sorted Array II
LeetCode Top Interview 150
Channel: JDCodebase

Problem:
Given a sorted array nums, remove duplicates in-place
such that each element appears at most twice.
Return the number of valid elements k.

--------------------------------------------------
APPROACH 1: BRUTE FORCE (EXTRA SPACE)
--------------------------------------------------
Idea:
- Use a map to count frequency
- Use a temporary array to store allowed elements (count <= 2)
- Copy result back to nums

Time Complexity: O(n)
Space Complexity: O(n)  ❌ (Not interview optimal)
*/

var removeDuplicatesBruteForce = function (nums) {
  let freqMap = {};
  let temp = [];

  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;

    if (freqMap[num] <= 2) {
      temp.push(num);
    }
  }

  // Copy back to original array
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  return temp.length;
};

/*
--------------------------------------------------
APPROACH 2: TWO POINTER (COUNT BASED) ⭐ BEST
--------------------------------------------------
Idea:
- Since array is sorted, allow nums[i] only if
  nums[i] !== nums[k - 2]
- k is the write index

Time Complexity: O(n)
Space Complexity: O(1) ✅ (Interview Preferred)
*/

var removeDuplicatesTwoPointerCount = function (nums) {
  if (nums.length <= 2) return nums.length;

  let k = 2; // write pointer

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

/*
--------------------------------------------------
APPROACH 3: TWO POINTER (FREQUENCY TRACKING)
--------------------------------------------------
Idea:
- Track count of current number
- Reset count when number changes
- Write only if count <= 2

Time Complexity: O(n)
Space Complexity: O(1)
(Beginner friendly, slightly longer logic)
*/

var removeDuplicatesTwoPointerFrequency = function (nums) {
  if (nums.length === 0) return 0;

  let write = 1;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[write] = nums[i];
      write++;
    }
  }

  return write;
};

/*
--------------------------------------------------
USAGE NOTE:
--------------------------------------------------
LeetCode expects only ONE function named removeDuplicates.
For submission, use APPROACH 2 (Two Pointer - Count Based).

Example for LeetCode submission:

var removeDuplicates = removeDuplicatesTwoPointerCount;
*/
