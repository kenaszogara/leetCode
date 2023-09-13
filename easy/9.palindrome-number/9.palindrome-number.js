/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //  w = [1, 2, 1]
  // w.length is 3
  // w[0] = w[0-3] -> w[2]
  // w[1] = w[1-3]
  // w[2] = w[2-3]
  const digits = Array.from(x.toString(), Number);

  const limit = Math.ceil(digits.length / 2);

  for (let i = 0; i <= limit; i++) {
    const w = digits[i];
    const y = digits[digits.length - 1 - i];

    if (w !== y) {
      return false;
    }
  }

  return true;
};
// @lc code=end
