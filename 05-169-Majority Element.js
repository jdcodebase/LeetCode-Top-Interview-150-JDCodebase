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
APPROACH 1: BRUTE FORCE
---------------------------------------------------------
Idea:
For every element, count how many times it appears.
If count > n / 2, return that element.

This approach is easy to understand but very slow.
*/

// Time: O(n^2)
// Space: O(1)
var majorityElementBruteForce = function(nums) {
    let n = nums.length;

    // Pick each element one by one
    for (let i = 0; i < n; i++) {
        let count = 0;

        // Count its occurrences
        for (let j = 0; j < n; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }

        // Check if it is the majority element
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

This is faster and commonly used in interviews.
*/

// Time: O(n)
// Space: O(n)
var majorityElementHashMap = function(nums) {
    let map = new Map();
    let n = nums.length;

    for (let num of nums) {
        // Increase frequency
        map.set(num, (map.get(num) || 0) + 1);

        // Check majority condition
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

This approach is simple but slower due to sorting.
*/

// Time: O(n log n)
// Space: O(1) or O(log n)
var majorityElementSorting = function(nums) {
    // Sort the array
    nums.sort((a, b) => a - b);

    // Return the middle element
    return nums[Math.floor(nums.length / 2)];
};



/*
---------------------------------------------------------
USAGE (Example)
---------------------------------------------------------

const nums = [2,2,1,1,1,2,2];

console.log(majorityElementBruteForce(nums)); // 2
console.log(majorityElementHashMap(nums));    // 2
console.log(majorityElementSorting(nums));    // 2

---------------------------------------------------------
*/
