/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let s = 0;
  let j = 0;
  for (let i = 0; i < triangle.length; i++) {
    // for first item
    if (i === 0) {
      s += triangle[i][j];
      console.log(j, s);
      continue;
    }

    if (i + 1 <= triangle.length - 1) {
      let a;
      let _a;
      let b;
      let _b;

      if (
        triangle[i + 1][j] + triangle[i][j] <
        triangle[i + 1][j + 1] + triangle[i][j]
      ) {
        a = triangle[i + 1][j] + triangle[i][j];
        _a = triangle[i + 1][j];
      } else {
        a = triangle[i + 1][j + 1] + triangle[i][j];
        _a = triangle[i + 1][j + 1];
      }

      if (
        triangle[i + 1][j + 1] + triangle[i][j + 1] <
        triangle[i + 1][j + 1 + 1] + triangle[i][j + 1]
      ) {
        b = triangle[i + 1][j + 1] + triangle[i][j + 1];
        _b = triangle[i + 1][j + 1];
      } else {
        b = triangle[i + 1][j + 1 + 1] + triangle[i][j + 1];
        _b = triangle[i + 1][j + 1 + 1];
      }

      if (a < b) {
        s += triangle[i][j];

        console.log(j, s);
        // } else if (_a === _b) {
        //   console.log(_a, _b);
        //   s +=
        //     triangle[i][j] < triangle[i][j + 1]
        //       ? triangle[i][j]
        //       : triangle[i][j + 1];
        //   console.log(j, s);
      } else {
        j += 1;
        s += triangle[i][j];

        console.log(j, s);
      }
      continue;
    }

    if (triangle[i][j] < triangle[i][j + 1]) {
      s += triangle[i][j];
    } else {
      s += triangle[i][j + 1];
    }

    console.log(j, s);
  }
  return s;
};
// @lc code=end
