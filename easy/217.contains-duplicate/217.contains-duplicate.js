/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], nums[i]);
  }

  if (map.size !== nums.length) {
    return true;
  }

  return false;
};
