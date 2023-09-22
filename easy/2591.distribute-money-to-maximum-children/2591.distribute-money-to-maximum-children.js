/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  let m = money - children;
  if (m < 0) return -1;

  const c = Array(children).fill(1);

  for (let i = 0; i < c.length; i++) {
    if (m - 7 >= 0) {
      c[i] = c[i] + 7;
      m = m - 7;
    } else if (c[i] + m > 4 || c[i] + m < 4) {
      c[i] = c[i] + m;
      m = m - m;
    } else {
      // only here m = 3
      if (i === c.length - 1) {
        c[i - 1] = c[i - 1] + 2;
        c[i] = c[i] + 1;
      } else {
        c[i] = c[i] + 2;
        c[i + 1] = c[i + 1] + 1;
      }
      m = m - 3;
    }
  }

  if (m > 0) {
    c[0] = c[0] + m;
    m = m - m;
  }

  console.log(c);

  return c.filter((e) => e === 8).length;
};
