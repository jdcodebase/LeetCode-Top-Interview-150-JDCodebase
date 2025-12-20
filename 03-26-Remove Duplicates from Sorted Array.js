/*
LeetCode 26 – Remove Duplicates from Sorted Array
LeetCode Top Interview 150
JDCodebase

--------------------------------------------------
This file contains ALL 4 solution approaches:
1) Brute Force (Extra Space)
2) Set Method (Built-in)
3) Two Pointers – Overwrite Method
--------------------------------------------------
*/

/* =====================================================
   Approach 1: Brute Force (Using Extra Space)
   -----------------------------------------------------
   Idea:
   - Since the array is sorted, duplicates are adjacent
   - Store unique elements in a new array
   - Copy them back to original array

   Time Complexity: O(n)
   Space Complexity: O(n)
   Not interview optimal
   ===================================================== */

function removeDuplicatesBruteForce(nums) {
  if (nums.length === 0) return 0;

  let unique = [];
  unique.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      unique.push(nums[i]);
    }
  }

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }

  return unique.length;
}

/* =====================================================
   Approach 2: Set Method (Built-in, Practical)
   -----------------------------------------------------
   Idea:
   - Use JavaScript Set to remove duplicates
   - Copy unique values back to nums

   Time Complexity: O(n)
   Space Complexity: O(n)
   Not interview preferred (extra space)
   ===================================================== */

function removeDuplicatesUsingSet(nums) {
  let unique = [...new Set(nums)];

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }

  return unique.length;
}

/* =====================================================
   Approach 3: Two Pointers (Overwrite Method)
   -----------------------------------------------------
   Idea:
   - Compare current element with previous element
   - Overwrite duplicates in-place

   Time Complexity: O(n)
   Space Complexity: O(1)
   Interview Preferred
   ===================================================== */

function removeDuplicatesTwoPointersOverwrite(nums) {
  if (nums.length === 0) return 0;

  let index = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
}

/* =====================================================
   Example Usage (Optional Testing)
   -----------------------------------------------------
*/

let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1);
// Output: 2 [1, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicatesUsingSet(nums2), nums2);
// Output: 5 [0,1,2,3,4,...]
