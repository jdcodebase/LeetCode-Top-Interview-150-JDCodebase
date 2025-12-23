/*
---------------------------------------------------------
LeetCode 169 – Majority Element
LeetCode Top Interview 150 | JDCodebase
---------------------------------------------------------

Problem:
Given an array nums of size n, return the majority element.
The majority element appears more than ⌊n / 2⌋ times.
The majority element always exists.
---------------------------------------------------------
*/

/*
---------------------------------------------------------
APPROACH 1: BRUTE FORCE
---------------------------------------------------------
Idea:
For every element, count how many times it appears.
If count > n / 2, return that element.

This approach is easy to understand but very slow.
*/

// Time: O(n^2)
// Space: O(1)
var majorityElementBruteForce = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count > Math.floor(n / 2)) {
      return nums[i];
    }
  }
};

/*
---------------------------------------------------------
APPROACH 2: HASH MAP
---------------------------------------------------------
Idea:
Store the frequency of each element in a map.
As soon as any frequency becomes greater than n / 2,
return that element.

This is faster but uses extra memory.
*/

// Time: O(n)
// Space: O(n)
var majorityElementHashMap = function (nums) {
  let map = new Map();
  let n = nums.length;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.get(num) > Math.floor(n / 2)) {
      return num;
    }
  }
};

/*
---------------------------------------------------------
APPROACH 3: SORTING
---------------------------------------------------------
Idea:
Sort the array.
The majority element will always be at index ⌊n / 2⌋
because it appears more than half the time.

Simple but slower due to sorting.
*/

// Time: O(n log n)
// Space: O(1) / O(log n)
var majorityElementSorting = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

/*
---------------------------------------------------------
APPROACH 4: BOYER–MOORE VOTING ALGORITHM (OPTIMAL ⭐)
---------------------------------------------------------
Idea:
If an element appears more than n / 2 times,
it cannot be cancelled out by other elements.

We keep a candidate and a count.
Different elements cancel each other.
The final candidate is the majority element.

This is the BEST solution for interviews.
*/

// Time: O(n)
// Space: O(1)
var majorityElementBoyerMoore = function (nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

/*
---------------------------------------------------------
APPROACH 5: DIVIDE AND CONQUER
---------------------------------------------------------
Idea:
The majority element of the entire array
must be the majority element in at least one half.

We recursively find the majority in left and right halves
and then compare their counts.
*/

// Time: O(n log n)
// Space: O(log n) (recursion stack)
var majorityElementDivideAndConquer = function (nums) {
  function majority(lo, hi) {
    // Base case: only one element
    if (lo === hi) return nums[lo];

    let mid = Math.floor((lo + hi) / 2);

    // Find majority in left and right halves
    let left = majority(lo, mid);
    let right = majority(mid + 1, hi);

    // If both halves agree
    if (left === right) return left;

    // Count both candidates
    let leftCount = 0;
    let rightCount = 0;

    for (let i = lo; i <= hi; i++) {
      if (nums[i] === left) leftCount++;
      if (nums[i] === right) rightCount++;
    }

    return leftCount > rightCount ? left : right;
  }

  return majority(0, nums.length - 1);
};

/*
---------------------------------------------------------
APPROACH 6: BIT MANIPULATION (ADVANCED)
---------------------------------------------------------
Idea:
If a number appears more than n / 2 times,
then for every bit position,
that bit must also appear more than n / 2 times.

We count bits from position 0 to 31
and rebuild the majority element.
*/

// Time: O(n)
// Space: O(1)
var majorityElementBitManipulation = function (nums) {
  let result = 0;
  let n = nums.length;

  for (let i = 0; i < 32; i++) {
    let count = 0;

    for (let num of nums) {
      if ((num >> i) & 1) {
        count++;
      }
    }

    if (count > n / 2) {
      result |= 1 << i;
    }
  }

  return result;
};

/*
---------------------------------------------------------
USAGE (Example)
---------------------------------------------------------
*/

const nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElementBruteForce(nums)); // 2
console.log(majorityElementHashMap(nums)); // 2
console.log(majorityElementSorting(nums)); // 2
console.log(majorityElementBoyerMoore(nums)); // 2
console.log(majorityElementDivideAndConquer(nums)); // 2
console.log(majorityElementBitManipulation(nums)); // 2

/*
---------------------------------------------------------
FINAL NOTE:
For interviews and LeetCode submission,
always prefer Boyer–Moore Voting Algorithm.
---------------------------------------------------------
*/
