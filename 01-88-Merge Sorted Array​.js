/**
 * LeetCode 88 - Merge Sorted Array
 * Language: JavaScript
 * Series: LeetCode Top Interview 150 | JDCodebase
 */

// --------------------------------------------------
// Brute Force Solution (Not Optimal)
// --------------------------------------------------
// Idea:
// 1. Copy all elements of nums2 into nums1 after index m
// 2. Sort nums1

// Time Complexity: O((m + n) log (m + n))
// Space Complexity: O(1) (ignoring sort internals)

var mergeBruteForce = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
};

// --------------------------------------------------
// Optimal Solution (Two Pointers - Reverse Merge)
// --------------------------------------------------
// Idea:
// Merge from the end to avoid overwriting elements in nums1

// Time Complexity: O(m + n)
// Space Complexity: O(1)

var mergeOptimal = function (nums1, m, nums2, n) {
  let i = m - 1; // pointer for nums1 valid elements
  let j = n - 1; // pointer for nums2
  let k = m + n - 1; // pointer for nums1 end

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

/*
Example:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

mergeOptimal(nums1, m, nums2, n);
Result: [1,2,2,3,5,6]
*/
