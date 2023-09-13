/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const m = new Map();

  for (const num of nums) {
    if (!m.has(num)) m.set(num, 1);
    else {
      const prev = m.get(num);
      m.set(num, prev + 1);
    }
  }

  const r = [...m.entries()]
    .sort((a, b) => (a[1] < b[1] ? 1 : -1))
    .map((e) => e[0])
    .slice(0, k);
  return r;
};
// @lc code=end
