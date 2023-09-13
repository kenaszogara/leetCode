/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let pr = [1];
  for (let i = 1; i < nums.length; i++) {
    const l = i - 1 < 0 ? 1 : pr[i - 1];
    const r = i - 1 < 0 ? 1 : nums[i - 1];
    pr[i] = l * r;
  }

  let sr = 1;
  for (let i = nums.length - 1; -1 < i; i--) {
    pr[i] = sr * pr[i];
    sr = sr * nums[i];
  }

  console.log(pr);

  return pr;
};
// @lc code=end
