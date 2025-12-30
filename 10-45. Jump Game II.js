// =======================================
// LeetCode 45 – Jump Game II
// Problem: Minimum number of jumps to reach the last index
// =======================================

// =======================
// 1️⃣ Brute Force Solution (Recursive)
// =======================
function jumpBruteForce(nums) {
  function helper(index) {
    // Base case: reached or passed the last index
    if (index >= nums.length - 1) return 0;

    let minJumps = Infinity;

    // Try all possible jumps from current index
    for (let step = 1; step <= nums[index]; step++) {
      minJumps = Math.min(minJumps, 1 + helper(index + step));
    }

    return minJumps;
  }

  return helper(0);
}

// Example usage:
// const nums = [2,3,1,1,4];
// console.log(jumpBruteForce(nums)); // Output: 2

// =======================
// 2️⃣ Optimal Solution – Greedy
// =======================
function jump(nums) {
  let jumps = 0; // Count of jumps
  let currentEnd = 0; // End of the current range
  let farthest = 0; // Farthest index reachable in the current range

  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest reachable index
    farthest = Math.max(farthest, i + nums[i]);

    // If we reach the end of the current range, we must jump
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}

// Example usage:
// const nums = [2,3,1,1,4];
// console.log(jump(nums)); // Output: 2
