/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  // let c = 1

  const nonAlphaNumPattern = /[^A-Za-z\d]/;

  while (i < j) {
    // if not alpha numeric
    if (nonAlphaNumPattern.test(s[j])) {
      j--;
      continue;
    } else if (nonAlphaNumPattern.test(s[i])) {
      i++;
      continue;
    }

    const pattern = new RegExp(s[i], "i");

    if (pattern.test(s[j])) {
      i++;
      j--;
      continue;
    } else {
      return false;
    }
  }

  return true;
};
// @lc code=end
