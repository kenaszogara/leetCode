/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1) return false;

  const a = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        a.push(")");
        break;
      case "{":
        a.push("}");
        break;
      case "[":
        a.push("]");
        break;
    }

    if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      let c = a.pop();

      if (s[i] !== c) return false;
    }
  }

  if (a.length > 0) return false;

  return true;
};

// @lc code=end
