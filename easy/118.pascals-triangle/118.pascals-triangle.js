/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */

let generate = function (numRows) {
  let result = new Array(numRows);
  let temp = [];

  for (i = 0; i < numRows; i++) {
    result[i] = [];

    for (k = 0; k < temp.length + 1; k++) {
      let left = k - 1 >= 0 ? k - 1 : null;
      let right = k < temp.length ? k : null;

      let leftV = left !== null ? temp[left] : 0;
      let rightV = right !== null ? temp[right] : 0;

      let sum = leftV === 0 && rightV === 0 ? 1 : leftV + rightV;

      result[i].push(sum);
    }

    // update temp and result
    console.log(result[i]);
    temp = result[i];
  }

  return result;
};

// @lc code=end
