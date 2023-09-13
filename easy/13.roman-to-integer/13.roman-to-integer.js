/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

const getValueFromS = (s) => {
  switch (s) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;

    default:
      return null;
  }
};

var romanToInt = function (s) {
  let n = 0;

  for (let i = 0; i < s.length; i++) {
    const v = getValueFromS(s[i]);
    const nV = getValueFromS(s[i + 1]);

    const con1 = v === 1 && (nV === 5 || nV === 10);
    const con2 = v === 10 && (nV === 50 || nV === 100);
    const con3 = v === 100 && (nV === 500 || nV === 1000);

    // decides to add or subtract
    if (con1 || con2 || con3) {
      n = n - v;
    } else {
      n = n + v;
    }
  }
};
// @lc code=end
