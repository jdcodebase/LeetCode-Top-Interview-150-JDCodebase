/*
------------------------------------------------------
LeetCode 380 - Insert Delete GetRandom O(1)
LeetCode Top Interview 150 | JDCodebase
------------------------------------------------------

Design a data structure that supports insert, delete,
and getRandom in average O(1) time.
*/

var RandomizedSet = function () {
  this.arr = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  }

  this.arr.push(val);
  this.map.set(val, this.arr.length - 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }

  let index = this.map.get(val);
  let lastVal = this.arr[this.arr.length - 1];

  // Move last element to the index of the element to remove
  this.arr[index] = lastVal;
  this.map.set(lastVal, index);

  // Remove last element
  this.arr.pop();
  this.map.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex];
};

var obj = new RandomizedSet();
obj.insert(1);
obj.remove(2);
obj.getRandom();
