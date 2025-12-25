/*
LeetCode 189 - Rotate Array
LeetCode Top Interview 150
JDCodebase

Problem:
Rotate the array to the right by k steps.
The rotation must be done in-place.
*/

/* --------------------------------------------------
   Approach 1: Brute Force (For Understanding)
-------------------------------------------------- */

var rotateBruteForce = function (nums, k) {
  let n = nums.length;

  // Reduce unnecessary rotations
  k = k % n;

  // Perform rotation k times
  for (let i = 0; i < k; i++) {
    // Store last element
    let last = nums[n - 1];

    // Shift elements to the right
    for (let j = n - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }

    // Place last element at front
    nums[0] = last;
  }
};

/*
Time Complexity: O(n × k)
Space Complexity: O(1)

Note:
This approach is easy to understand but inefficient
for large values of k.
*/

/* --------------------------------------------------
   Approach 2: Optimal Solution (Reverse Method)
-------------------------------------------------- */

var rotate = function (nums, k) {
  let n = nums.length;

  // Reduce k to avoid unnecessary work
  k = k % n;

  // Step 1: Reverse entire array
  reverse(nums, 0, n - 1);

  // Step 2: Reverse first k elements
  reverse(nums, 0, k - 1);

  // Step 3: Reverse remaining elements
  reverse(nums, k, n - 1);
};

// Helper function to reverse part of the array
function reverse(nums, left, right) {
  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}

/*
Time Complexity: O(n)
Space Complexity: O(1)

This is the interview-preferred solution.
*/
