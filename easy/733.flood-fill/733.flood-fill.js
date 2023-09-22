/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const target = image[sr][sc];
  const result = [...image];

  const traverse = (row, col) => {
    // console.log(target, row, col);

    const top = row - 1;
    const left = col - 1;
    const bottom = row + 1;
    const right = col + 1;

    if (top > -1 && result[top][col] === target) {
      result[top][col] = color;
      traverse(top, col);
    }

    if (left > -1 && result[row][left] === target) {
      result[row][left] = color;
      traverse(row, left);
    }

    if (bottom < result.length && result[bottom][col] === target) {
      result[bottom][col] = color;
      traverse(bottom, col);
    }

    if (right < result[row].length && result[row][right] === target) {
      result[row][right] = color;
      traverse(row, right);
    }
  };

  if (target === color) {
    return image;
  } else {
    traverse(sr, sc);
    result[sr][sc] = color;
    return result;
  }

  // console.log(result);
};
// @lc code=end
