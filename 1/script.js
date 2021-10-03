/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i];
    let subnum = nums.indexOf(sub);
    console.log(sub);
    console.log(subnum);
    if (subnum !== -1 && subnum !== i) {
      return [i, subnum];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
