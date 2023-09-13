/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const m = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];

    if (m.has(sChar)) {
      const d = m.get(sChar);
      m.set(sChar, d + 1);
    } else {
      m.set(sChar, 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];

    if (m.has(tChar)) {
      const d = m.get(tChar);

      if (d - 1 === 0) m.delete(tChar);
      else m.set(tChar, d - 1);
    } else {
      m.set(tChar, 1);
    }
  }

  return m.size === 0;
};
// @lc code=end
