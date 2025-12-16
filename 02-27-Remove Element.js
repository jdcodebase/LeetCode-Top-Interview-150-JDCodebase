/**
 * LeetCode 27 - Remove Element
 * Language: JavaScript
 * Series: LeetCode Top Interview 150 | JDCodebase
 */

/*
==================================================
Approach 1: Brute Force (Naive Thinking)
==================================================
Idea:
- Traverse the array
- When val is found, shift elements to the left
- Reduce array size and repeat

Time Complexity: O(n^2)
Space Complexity: O(1)
*/

var removeElementBruteForce = function (nums, val) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === val) {
      for (let j = i; j < n - 1; j++) {
        nums[j] = nums[j + 1];
      }
      n--;
      i--;
    }
  }

  return n;
};

/*
==================================================
Approach 2: Using Extra Array
==================================================
Idea:
- Create a new index
- Copy elements that are not equal to val
- Overwrite original array

Time Complexity: O(n)
Space Complexity: O(n)
*/

var removeElementExtraArray = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

/*
==================================================
Approach 3: Two Pointer (Overwrite Method)
==================================================
Idea:
- Use one pointer to overwrite unwanted elements
- Keep only valid elements at the front

Time Complexity: O(n)
Space Complexity: O(1)
*/

var removeElementTwoPointerOverwrite = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }

  return k;
};

/*
==================================================
Approach 4: Two Pointer (Swap With End)
==================================================
Idea:
- Swap target element with last element
- Reduce array size
- Order does not matter

Time Complexity: O(n)
Space Complexity: O(1)
*/

var removeElementTwoPointerSwap = function (nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }

  return n;
};
