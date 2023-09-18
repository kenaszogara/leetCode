/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0;
  let j = 1;

  while (true) {
    const sum = numbers[i] + numbers[j];

    // find a solution condition
    if (sum === target) {
      return [i + 1, j + 1];
    }

    if (sum < target) {
      i++;
      j++;
      continue;
    }

    if (sum > target) {
      i--;
      continue;
    }
  }
};
// @lc code=end
