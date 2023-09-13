/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const n = nums.sort((a, b) => (a < b ? -1 : 1));

  let r = 1;
  let l = 1;

  for (let i = 1; i < n.length; i++) {
    const e = n[i];
    const prev = n[i - 1];

    if (e - prev === 0) {
      continue;
    }

    if (e - prev === 1) l++;
    else {
      r = l > r ? l : r;
      l = 1;
    }
  }

  return l > r ? l : r;
};
// @lc code=end
