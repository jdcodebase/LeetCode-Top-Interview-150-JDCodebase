/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let maxH = 0; // Stores the maximum valid h-index found

  // Try all possible h values from 1 to number of papers
  for (let h = 1; h <= citations.length; h++) {
    let count = 0; // Count papers with at least h citations

    // Count how many papers satisfy citations >= h
    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= h) {
        count++;
      }
    }

    // If at least h papers have >= h citations, h is valid
    if (count >= h) {
      maxH = h;
    }
  }

  return maxH;
};

// Test cases
console.log(hIndex([3, 0, 6, 1, 5])); // 3
console.log(hIndex([1, 3, 1])); // 1
