/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
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

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // bat
  // nat
  const r = [[]];

  for (let i = 0; i < strs.length; i++) {
    // initial group is null so add then continue
    if (r[0].length === 0) {
      r[0].push(strs[i]);
      continue;
    }

    const str = strs[i];

    for (let j = 0; j < r.length; j++) {
      const el = r[j][0];

      // if found then push to group then stop
      if (isAnagram(str, el)) {
        r[j].push(str);
        break;
      }

      if (j !== r.length - 1) {
        continue;
      } else {
        r.push([str]);
        break;
      }
    }
  }

  return r;
};
// @lc code=end
