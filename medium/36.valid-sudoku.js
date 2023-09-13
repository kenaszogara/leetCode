/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const bm = new Map();

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      const e = board[x][y];

      if (e === ".") continue;

      const xK = `[x:${x}]`;
      const yK = `[y:${y}]`;
      const xyK = `[${Math.floor(x / 3)}][${Math.floor(y / 3)}]`;

      if (!bm.has(xK)) bm.set(xK, new Set([0]));
      if (!bm.has(yK)) bm.set(yK, new Set([0]));
      if (!bm.has(xyK)) {
        bm.set(xyK, new Set([0]));
      }

      // get the set defined
      const xP = bm.get(xK);
      const yP = bm.get(yK);
      const xyP = bm.get(xyK);

      if (xP.has(e)) return false;
      if (yP.has(e)) return false;
      if (xyP.has(e)) return false;

      bm.set(xK, xP.add(e));
      bm.set(yK, yP.add(e));
      bm.set(xyK, xyP.add(e));
    }
  }

  return true;
};
// @lc code=end
